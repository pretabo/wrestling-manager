import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const initialDate = new Date(2025, 0, 1); // January 1, 2025
  const [currentDate, setCurrentDate] = useState(initialDate);

  const progressDate = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  return (
    <DateContext.Provider value={{ currentDate, progressDate }}>
      {children}
    </DateContext.Provider>
  );
};