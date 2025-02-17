import React from 'react';

function EventSimulation({ event, onBack }) {
  return (
    <div className="event-simulation">
      <h1>Event Simulation</h1>
      <h2>{event.name}</h2>
      <h3>Matches</h3>
      <ul>
        {event.matches.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
      <h3>Wrestlers</h3>
      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Wrestler 1</th>
            <th>Wrestler 2</th>
          </tr>
        </thead>
        <tbody>
          {event.wrestlers.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{match[0]}</td>
              <td>{match[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default EventSimulation;