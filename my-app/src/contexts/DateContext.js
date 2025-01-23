import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date('2025-01-01'));

  const progressDate = () => {
    setCurrentDate(prevDate => {
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