import { useUser } from "./context/UserContext";

interface WinModalProp {
    tries: number;
    resetGame: () => void;
}

export function WinModal({ tries, resetGame }: WinModalProp) {
    const {user} = useUser();
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-2xl w-[400px] border border-gray-100">
                
                
                <div className="text-6xl mb-4">🎉</div>
                
                
                <h2 className="text-3xl font-bold text-gray-900">Impressive !</h2>
                <p className="text-gray-500 mt-2 mb-8">You got it in {tries} guesses</p>
                
                
                {user && (<div className="flex gap-4 mb-8">
                    {[`${user.nGames}\nPlayed`, `${user.wins/user.nGames * 100} %\nWin %`, `${user.winStreak}\nStreak`].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-25 h-20">
                            <span className="text-xl font-bold whitespace-pre-line text-center">{stat}</span>
                        </div>
                    ))}
                </div>)};

                
                <button onClick={resetGame} className="w-full bg-green-600 text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition-colors">
                    Play Again
                </button>
            </div>
            </div>
    );
}

interface LoseModal{
    resetGame: () => void; 
    solution: string;
};

export function LoseModal ({ resetGame, solution }: LoseModal) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 z-50">
      <div className="flex flex-col items-center bg-white px-8 py-10 rounded-[32px] shadow-2xl w-full max-w-[450px]">
        
        
        <div className="text-[72px] leading-none mb-6">😔</div>
        
        
        <h2 className="text-3xl font-bold text-gray-900 text-center tracking-tight">
          Better luck next time
        </h2>
        <p className="text-gray-400 mt-2 mb-8 text-lg">
          The word was
        </p>
        
        
        <div className="w-full bg-[#dce0e5] rounded-2xl py-6 flex items-center justify-center mb-8">
          <span className="text-4xl font-extrabold text-gray-900 tracking-widest uppercase">
            {solution}
          </span>
        </div>

        
        <button 
          onClick={resetGame}
          className="w-full bg-[#1c1c1e] text-white font-semibold text-lg py-4 rounded-2xl hover:bg-black transition-colors active:scale-[0.98]"
        >
          Play Again
        </button>
        
      </div>
    </div>
  );
};