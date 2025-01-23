import React from 'react';

function LeftColumn() {
  return (
    <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <button>Continue</button>
      <button>View Roster</button>
      <button>Event Management</button>
      <input type="date" />
    </div>
  );
}

export default LeftColumn;