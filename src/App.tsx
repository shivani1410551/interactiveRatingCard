import React, { useReducer } from "react";
import RatingCard from "./Components/RatingCard";
import ThankYouState from "./Components/ThankYouState";
import { Action,State } from "./types/type";


const initialState:State = {
  rating: null,
  isSubmitted: false,
};

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
