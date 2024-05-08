import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default CurrentTime;
