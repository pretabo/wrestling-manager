import React from 'react';

function MainArea({ eventToday, onViewChange }) {
  return (
    <div className="main-area">
      <h1>Welcome to the Wrestling Manager</h1>
      {eventToday && (
        <div className="event-today">
          <p>There is an event today!</p>
          <button className="pretty-button" onClick={() => onViewChange('eventManagement')}>Take me to Event Management</button>
        </div>
      )}
    </div>
  );
}

export default MainArea;