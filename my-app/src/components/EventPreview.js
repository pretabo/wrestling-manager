import React from 'react';

function EventPreview({ event }) {
  if (!event) {
    return <div>No event selected</div>;
  }

  return (
    <div className="event-preview">
      <h1>Event Preview</h1>
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
    </div>
  );
}

export default EventPreview;