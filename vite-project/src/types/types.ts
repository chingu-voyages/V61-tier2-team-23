export type LetterStatus = "unused" | "absent" | "present" | "correct";

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStatuses: Record<string, LetterStatus>;
}

export type History = Map<string, LetterStatus[]>;

export interface UserData {
  uid: string;
  name: string;
  email: string;
  nGames: number;
  wins: number;
  winStreak: number;
}
