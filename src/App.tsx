import React, { useReducer } from "react";
import RatingCard from "./Components/RatingCard";
import ThankYouState from "./Components/ThankYouState";


// Define the State type
type State = {
  rating: number | null;
  isSubmitted: boolean;
};


// Define the initial state
const initialState:State = {
  rating: null,
  isSubmitted: false,
};
// Define the Action type
type Action =
  | { type: "SET_RATING"; payload: number }
  | { type: "SET_SUBMITTED"; payload: boolean };

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_SUBMITTED":
      return { ...state, isSubmitted: action.payload };
    default:
      return state;
  }
}

const App: React.FC = () => {

  const [{ rating, isSubmitted }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);


  const typedDispatch = dispatch as React.Dispatch<Action>;

  return (
    <div className="bg-verydarkblue text-lightgrey font-overpass h-screen flex items-center justify-center">
      {isSubmitted ? (
        <ThankYouState rating={rating ?? 0} dispatch={typedDispatch} />
      ) : (
        <RatingCard dispatch={typedDispatch} rating={rating ?? 0} />
      )}
    </div>
  );
};

export default App;
