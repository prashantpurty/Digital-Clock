import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
       <div className="absolute top-8 flex items-center space-x-4">
        <img src="icons/alarm-clock.png" alt="Clock Icon" className="w-10 h-10 bg-white" />
        <h1 className="text-white text-4xl font-bold">Digital Clock</h1>
      </div>
      <div className="flex space-x-4 text-white text-8xl font-thin tracking-widest">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default Clock;
