import React, { useContext, useState, useEffect } from 'react';
import { CompanyContext } from '../contexts/CompanyContext';
import MatchManagement from './MatchManagement';
import EventSimulation from './EventSimulation';

function EventManagement({ onViewChange, selectedEvent }) {
  const { companyEvents } = useContext(CompanyContext);
  const [selectedEventState, setSelectedEventState] = useState(selectedEvent);
  const [isPlayingEvent, setIsPlayingEvent] = useState(false);

  useEffect(() => {
    if (selectedEvent) {
      setSelectedEventState(selectedEvent);
    }
  }, [selectedEvent]);

  const handlePlayEvent = () => {
    setIsPlayingEvent(true);
  };

  if (isPlayingEvent && selectedEventState) {
    return <EventSimulation event={selectedEventState} onBack={() => setIsPlayingEvent(false)} />;
  }

  if (selectedEventState) {
    return <MatchManagement event={selectedEventState} onBack={() => setSelectedEventState(null)} onPlayEvent={handlePlayEvent} />;
  }

  return (
    <div className="event-management">
      <button className="pretty-button">Play Event</button>
      <h2>Events</h2>
      <p>Details of the events are listed below.</p>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Prestige</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companyEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.prestige}</td>
              <td>
                <button className="pretty-button" onClick={() => setSelectedEventState(event)}>Manage Matches</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventManagement;