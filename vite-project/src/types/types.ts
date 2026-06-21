export type LetterStatus = "unused" | "absent" | "present" | "correct";

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStatuses: Record<string, LetterStatus>;
}
