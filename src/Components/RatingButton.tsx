import React from "react";

type RatingButtonProps = {
  num: number;
  rating: number;
  dispatch: React.Dispatch<{ type: "SET_RATING"; payload: number }>;
};

const RatingButton: React.FC<RatingButtonProps> = ({ num, rating, dispatch }) => {
  return (
    <button
      className={`btn-sm ${
        rating === num
          ? "bg-orange-500 text-white"
          : "bg-gray-700 text-white hover:bg-orange-500"
      } focus:outline-none focus:bg-white focus:text-darkblue active:bg-orange-500 active:text-white`}
      onClick={() => dispatch({ type: "SET_RATING", payload: num })}
      aria-label={`Rate ${num}`}
    >
      {num}
    </button>
  );
};

export default RatingButton;
