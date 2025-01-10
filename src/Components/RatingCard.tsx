import React from "react";
import RatingButton from "./RatingButton";

const ratingArray: number[] = [1, 2, 3, 4, 5];

type RatingCardProps = {
  dispatch: React.Dispatch<{ type: "SET_RATING" | "SET_SUBMITTED"; payload: number|null|boolean }>;
  rating: number;
};

const RatingCard: React.FC<RatingCardProps> = ({ dispatch, rating }) => {
  return (
    <div className="card sm:w-[80vw] max-w-md bg-gray-800 p-6 rounded-xl space-y-6 text-center shadow-lg">
      <button className="btn-sm bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-full">
        <img src="./images/icon-star.svg" alt="icon star" />
      </button>
      <h1 className="font-bold text-white text-3xl text-start">How did we do?</h1>
      <p className="text-gray-400 text-base text-start">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div className="flex justify-between gap-3">
        {ratingArray.map((num) => (
          <RatingButton dispatch={dispatch} num={num} key={num} rating={rating} />
        ))}
      </div>
      <button
        className="bg-orange-500 w-full rounded-3xl text-darkblue uppercase tracking-wider font-bold py-2 hover:bg-white hover:text-orange-500 transition-colors cursor-pointer"
        onClick={() => dispatch({ type: "SET_SUBMITTED", payload: true })}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
