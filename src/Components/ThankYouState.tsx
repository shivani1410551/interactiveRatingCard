import React from "react";

type ThankYouStateProps = {
  rating: number;
  dispatch: React.Dispatch<{ type: "SET_SUBMITTED"; payload: boolean }>;
};

const ThankYouState: React.FC<ThankYouStateProps> = ({ rating, dispatch }) => {
  return (
    <div className="thankYouCard sm:w-[80vw] bg-gray-800 p-6 rounded-xl space-y-6 text-center shadow-lg">
      <img
        src="./images/illustration-thank-you.svg"
        alt="illustration thank you"
        className="mx-auto"
      />
      <p className="bg-btn-gradient rounded-3xl px-5 py-2 text-base text-orange-500">
        You selected {rating} out of 5
      </p>
      <h2 className="text-2xl font-bold mb-2 text-white">Thank you!</h2>
      <p className="text-lightgrey text-sm text-center">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
      <button
        onClick={() => dispatch({ type: "SET_SUBMITTED", payload: false })}
        className="bg-orange-500 rounded-3xl px-6 py-2 text-verydarkblue uppercase tracking-wider font-bold hover:bg-white hover:text-orange-500 transition-colors cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default ThankYouState;
