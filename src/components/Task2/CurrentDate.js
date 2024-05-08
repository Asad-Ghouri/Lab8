import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Current Date</h1>
      <p>{currentDate}</p>
    </div>
  );
}

export default CurrentDate;
