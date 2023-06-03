"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [timeRest, setTimeRest] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [isRestFinished, setIsRestFinished] = useState(false);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTime((prevTime) => ({
      ...prevTime,
      [name]: parseInt(value, 10),
    }));
  };

  const handleInputRestChange = (e) => {
    const { name, value } = e.target;
    setTimeRest((prevTime) => ({
      ...prevTime,
      [name]: parseInt(value, 10),
    }));
  };

  const toggleTimer = () => {
    if (isRunning || isResting) {
      setIsRunning(false);
      setIsResting(false);
      setIsTimerFinished(false);
      setIsRestFinished(false);
      setTime({ minutes: 0, seconds: 0 });
      setTimeRest({ minutes: 0, seconds: 0 });
    } else {
      setIsRunning(true);
      startTimer();
    }
  };

  const startTimer = () => {
    let totalSeconds = time.minutes * 60 + time.seconds;

    const timerInterval = setInterval(() => {
      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        setIsRunning(false);
        setIsTimerFinished(true);

        if (timeRest.minutes > 0 || timeRest.seconds > 0) {
          setIsResting(true);
          startRestTimer();
        }
      } else {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        setTime({ minutes, seconds });
      }
    }, 1000);
  };

  const startRestTimer = () => {
    let totalSeconds = timeRest.minutes * 60 + timeRest.seconds;

    const restTimerInterval = setInterval(() => {
      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(restTimerInterval);
        setIsResting(false);
        setIsRestFinished(true);
      } else {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        setTimeRest({ minutes, seconds });
      }
    }, 1000);
  };

  useEffect(() => {
    if (isTimerFinished && isRestFinished) {
      setTime({ minutes: 0, seconds: 0 });
      setTimeRest({ minutes: 0, seconds: 0 });
      setIsTimerFinished(false);
      setIsRestFinished(false);
    }
  }, [isTimerFinished, isRestFinished]);

  return (
    <div className="bg-[#004280] px-20 rounded-xl shadow-lg p-5 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Pomodoro</h1>
          {isRunning || isResting ? (
            <h2 className="text-white font-mono text-8xl font-bold bg-[#002649] p-5 m-2 rounded-xl">
              {isTimerFinished
                ? "00:00"
                : `${formatTime(time.minutes)}:${formatTime(time.seconds)}`}
            </h2>
          ) : (
            <div className="mt-5 text-8xl bg-[#002649] p-5 m-2 rounded-xl font-mono text-white">
              <input
                className="bg-transparent  p-1 rounded-xl w-32"
                type="number"
                name="minutes"
                min="0"
                max="59"
                value={formatTime(time.minutes)}
                onChange={handleInputChange}
              />
              :
              <input
                className="bg-transparent  p-1 rounded-xl w-32"
                type="number"
                name="seconds"
                min="0"
                max="59"
                value={formatTime(time.seconds)}
                onChange={handleInputChange}
              />
            </div>
          )}
        </section>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Descanso</h1>
          {isResting || isRunning ? (
            <h2 className="text-white font-mono text-8xl font-bold bg-[#002649] p-5 m-2 rounded-xl">
              {isRestFinished
                ? "00:00"
                : `${formatTime(timeRest.minutes)}:${formatTime(
                    timeRest.seconds
                  )}`}
            </h2>
          ) : (
            <div className="mt-5 text-8xl bg-[#002649] p-5 m-2 rounded-xl font-mono text-white">
              <input
                className="bg-transparent  p-1 rounded-xl w-32"
                type="number"
                name="minutes"
                min="0"
                max="59"
                value={formatTime(timeRest.minutes)}
                onChange={handleInputRestChange}
              />
              :
              <input
                className="bg-transparent  p-1 rounded-xl w-32"
                type="number"
                name="seconds"
                min="0"
                max="59"
                value={formatTime(timeRest.seconds)}
                onChange={handleInputRestChange}
              />
            </div>
          )}
        </section>
      </div>
      <button
        className="text-white text-2xl font-bold bg-[#002649] p-2 px-5 rounded-xl hover:bg-[#012C55] w-min"
        onClick={toggleTimer}
      >
        {isRunning || isResting ? "Detener" : "Iniciar"}
      </button>
    </div>
  );
};

export default Timer;
