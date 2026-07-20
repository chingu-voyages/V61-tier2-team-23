# Guessify

<img width="798" height="613" alt="image" src="https://github.com/user-attachments/assets/5fcb1335-88cb-424a-8c47-8db7303fdf3b" />

## Deployed

[https://guessifydev.netlify.app/](https://guessifydev.netlify.app/)

## Overview

Guessify is a fun website were visitors can play a word game similar to wordl and track their games. Users may create an account or sign-in with their Google account and track how many games they played and wins they have achieved. The game can be played on any device and users can use a dark mode layout if prefered. Passwords are securley saved with Firebase Authentication.

## Features

**Create Account:** Users may create an account with their name, email, and password.

**Sign-In with Google:** Users may sign-in to their Google account. An account is created on Firebase that matches their Google email so they can come back and continue their progess.

**Gameboard:** Users have 6 attempts to guess the 5 letter word. The word is randomly selected from a list of 500 words at a 9th grade reading level. If the a guess contains a letter in the correct spot it is highlighted green, and if the letter exists in the word but is in a different place then it is highlighted yellow. Users may ask Gemini for a Hint. Users may also select a hard mode option.

**Firebase DB:** User data and game data are saved in Firebase.

**Gemini AI:** Gemini is used in this application to give hints to struggling users.

**Secure Passwords:** Email and Password combinations are saved in Firebase Authentication and not in the database itself. This ensures passwords do not get leaked in a data breach.

**Error Handling:** [BODY]

**Responsiveness:** [BODY]

## Tech Stack

<img width="40" height="34" alt="image" src="https://github.com/user-attachments/assets/c10b710a-e807-4ea9-b94e-cd9140356b2a" /> React

<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/e778a716-f5ee-40e4-9880-e150895f818d" /> Typescript

<img width="40" height="25" alt="image" src="https://github.com/user-attachments/assets/6189b0c3-f23f-4d83-9b54-642c4960b45e" /> Tailwind CSS

<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/097a6fbe-5465-4e6b-818c-fe894c048691" /> Netlify

<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/89945268-e822-4c14-884c-e338ab2997e5" /> Firebase



## Getting Started

Clone the project

```bash
git clone https://github.com/chingu-voyages/V61-tier2-team-23
```

## Run the project locally

```bash
cd Guessify
```

Create .env and add your keys:
```bash
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
VITE_GOOGLE_CLIENT_ID=YOUR_VITE_GOOGLE_CLIENT_ID
VITE_FIREBASE_API_KEY=YOUR_VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_VITE_FIREBASE_MEASUREMENT_ID
```

```bash
npm install
```

```bash
npm run dev
```

Open browser

```bash
http://localhost:5173/
```

## Our Team
- Shivani Bhardwaj (Scrum Master): [GitHub](https://github.com/shivanibhardwaj0911) / [LinkedIn](https://www.linkedin.com/in/shivanibdwj)
- Viann Chang (Product Owner): [GitHub](https://github.com/vivchc) / [LinkedIn](https://www.linkedin.com/in/vc01)
- Qudroh (Product Owner): [LinkedIn](https://www.linkedin.com/in/qudroh-kadejo-08ba53319/)
- Lois Nkeiru (UX/UI Designer): [LinkedIn](https://www.linkedin.com/in/nkeirulois)
- Matthew Neie (Developer): [GitHub](https://github.com/MatthewNeie) / [LinkedIn](https://linkedin.com/in/matthew-neie)
- Tanishq Patel (Developer): [GitHub](https://github.com/Tanishqkumarpatel) / [LinkedIn](https://linkedin.com/in/tanishqkumarpatel)
