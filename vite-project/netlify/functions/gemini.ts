import { GoogleGenAI } from "@google/genai";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async (req, context) => {
    try {
        const { solution } = await req.json();

        if (!solution) {
            return new Response(JSON.stringify({ error: "Missing solution" }), {
                status: 400,
            });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const prompt = `You are giving a hint for a Wordle-style game. The secret word is "${solution}".

                        Give a strict 1-2 line hint (1 line preferred) that helps the player guess the word WITHOUT revealing it, spelling it, or using it directly (including rhymes or letters spelled out).

                        Rules:
                        - No greetings, no "here's your hint", no closing remarks, no offers to help further.
                        - Output ONLY the hint text itself. Nothing else.
                        - Do not mention the word "${solution}" or any part of it.
                        - Keep it concise, clever, and genuinely helpful.`;

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt,
        });

        return new Response(JSON.stringify({ hint: response.text?.trim() }), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
   }
};

export const config = {
  path: "/gemini",
};