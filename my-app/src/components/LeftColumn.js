import React, { useContext } from 'react';
import { DateContext } from '../contexts/DateContext';

function LeftColumn({ handleViewChange, onBack, onForward }) {
  const { currentDate, progressDate } = useContext(DateContext);

  const formattedDate = currentDate.toLocaleDateString('en-GB');

  const handleHome = () => {
    handleViewChange('home');
  };

  const handleContinue = () => {
    progressDate();
    console.log('Continue button clicked');
  };

  return (
    <div className="left-column">
      <div className="date-box">{formattedDate}</div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={onBack}>&larr;</button>
        <button className="nav-button" onClick={onForward}>&rarr;</button>
      </div>
      <button className="pretty-button" onClick={handleContinue}>Continue</button>
      <button className="pretty-button" onClick={handleHome}>Home</button>
      <button className="pretty-button" onClick={() => handleViewChange('roster')}>View Roster</button>
      <button className="pretty-button" onClick={() => handleViewChange('eventManagement')}>Event Management</button>
      <button className="pretty-button" onClick={() => handleViewChange('allWrestlers')}>All Wrestlers</button>
      <button className="pretty-button" onClick={() => handleViewChange('wrestlingIndustry')}>Wrestling Industry</button>
    </div>
  );
}

export default LeftColumn;