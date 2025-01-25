import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../contexts/CompanyContext';

function EventManagement() {
  const { companyEvents } = useContext(CompanyContext);
  // const [newEventName, setNewEventName] = useState('');
  // const [newEventDate, setNewEventDate] = useState(''); 
  // const [newEventMatches, setNewEventMatches] = useState([]);
  // const [newEventWrestlers, setNewEventWrestlers] = useState([['', ''], ['', '']]);
  // const [isPlayingEvent, setIsPlayingEvent] = useState(false);
  // const [selectedEventState, setSelectedEventState] = useState(null);
  const navigate = useNavigate();
  console.log('Event Management');
  console.log(companyEvents);

  const handlePlayEvent = (eventId) => {
    // Your logic to play the event
    console.log('Play event', eventId);
  };

  const handleManageMatches = (eventId) => {
    navigate(`/match-management/${eventId}`);
  };

  return (
    <div className="event-management">
    <div>
      <h1>Event Management</h1>
      {/* {companyEvents.map(event => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <button onClick={() => handleManageMatches(event.id)}>Manage Matches</button>
          <button onClick={() => handlePlayEvent(event.id)}>Play Event</button>
        </div>
      ))} */}
    </div>
    </div>
  );
}

export default EventManagement;