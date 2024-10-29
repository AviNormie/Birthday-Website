import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const Birthday = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [celebrate, setCelebrate] = useState(false);
  const navigate = useNavigate();

  // Function to calculate the time left
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2 text-2xl text-pink-600 font-bold"
      >
        {timeLeft[interval]}{" "}
        <span className="text-sm text-gray-500 capitalize">{interval}</span>
      </div>
    );
  });

  const handleCelebrate = () => {
    setCelebrate(true);
    setTimeout(() => {
      // navigate("/Ipsita-birthday");
    }, 3000); // Delay navigation to allow animation to complete
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl shadow-xl font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 py-4 px-6 rounded-xl  mb-6">
        Time Left Until Bhai ka Birthday!
      </h1>

      <div className="flex justify-center space-x-4">
        {timerComponents.length ? timerComponents : (
          <div className="text-4xl font-extrabold text-yellow-500">
            🎉 Happy Birthday IPSITA! 🎉
          </div>
        )}
      </div>

      <div className="mt-8 text-lg font-medium text-gray-700">
        We can't wait to celebrate!
      </div>
      <button  
          onClick={handleCelebrate}
          className='flex shadow-xl justify-center mt-20 text-3xl font-bold border-[3px] border-pink-950  rounded-lg bg-gradient-to-r from-pink-400 to-red-400 p-5 transform transition-transform duration-300 text-white hover:scale-105'>
         MUJHE DABAO NA 🥵
      </button>

      {/* Animation for celebration */}
      {celebrate && (
        <div className='text-xl font-bold mt-10 '>
          ITNA ZOR SE NAHI DABANA THA BUDDHU!!
        </div>
      )}

      {/* Add some birthday balloons and icons for extra flair */}
      <div className="absolute top-10 right-10">
        🎈🎈🎉🎂
      </div>
      <div className="absolute bottom-10 left-10">
        🎁🎈🍰🎊
      </div>
      <div className="absolute top-10 left-10">
        🎈🎈🎉🎂
      </div>
      <div className="absolute bottom-10 right-10">
        🎁🎈🍰🎊
      </div>
    </div>
  );
};

export default Birthday;
