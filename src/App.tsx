import React, { useState } from "react";
import RatingCard from "./Components/RatingCard";
import ThankYouState from "./Components/ThankYouState";

const App: React.FC = () => {
  const [rating, setRating] = useState<number|null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleRating(num: number): void {
    setRating(num);
  }

  function handleSubmit(): void {
    if (rating) {
      setIsSubmitted(true);
    }
  }

  return (
    <div className="bg-verydarkblue text-lightgrey font-overpass h-screen flex items-center justify-center">
      {isSubmitted ? (
        <ThankYouState rating={rating??0}
          setIsSubmitted= {setIsSubmitted}
        />
      ) : (
        <RatingCard
          handleRating={handleRating}
          handleSubmit={handleSubmit}
          rating={rating??0}
        />
      )}
    </div>
  );
};

export default App;
