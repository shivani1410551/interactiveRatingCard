import React from "react";

interface RatingButtonProps {
  num: number;
  rating: number;
  onHandleRating: (num: number) => void;
}

const RatingButton: React.FC<RatingButtonProps> = ({ num, rating, onHandleRating }) => {
  return (
    <button
      className={`btn-sm
        ${
          rating === num
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-white hover:bg-orange-500"
        }
        focus:outline-none focus:bg-white focus:text-darkblue
        active:bg-orange-500 active:text-white
        `}
      onClick={() => onHandleRating(num)}
      aria-label={`Rate ${num}`}
    >
      {num}
    </button>
  );
};

export default RatingButton;
