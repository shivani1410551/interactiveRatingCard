import React from 'react'
type thankYouCardProps = {
  rating: number,
  setIsSubmitted: (a:boolean) => void,

}
const ThankYouState:React.FC<thankYouCardProps> = ({rating,setIsSubmitted}) => {
  return (
          <div className="thankYouCard sm:w-[80vw]">
      <img src="./images/illustration-thank-you.svg" alt="illustration thank you" />
      <p className='bg-btn-gradient rounded-3xl px-5 py-2 text-base text-orange-500'>
  You selected {rating} out of 5

      </p>
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
      <p className="text-lightgrey text-sm  text-center">

         We appreciate you taking the time to give a rating. If you ever need more support,
   don’t hesitate to get in touch!


      </p>
        <button
        onClick={()=>setIsSubmitted(false)}
        className="bg-orange-500 rounded-3xl px-6 py-2 text-verydarkblue uppercase tracking-wider font-bold hover:bg-white hover:text-orange-500 transition-colors cursor-pointer"
      >
        Go Back
      </button>
        </div>

  )
}

export default ThankYouState
