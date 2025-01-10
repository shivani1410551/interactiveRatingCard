export type Action =
  | { type: "SET_RATING"; payload: number }
  | { type: "SET_SUBMITTED"; payload: boolean };

export type State = {
  rating: number | null;
  isSubmitted: boolean;
};
