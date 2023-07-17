import React from 'react';

const TimeConverter = ({ totalSeconds }) => {
  const convertSecondsToTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    return { days, hours, minutes };
  };

  const { days, hours, minutes } = convertSecondsToTime(totalSeconds);

  return (
    <div>
      <p>Time Difference: {days} days, {hours} hours, {minutes} minutes</p>
    </div>
  );
};

export default TimeConverter;
