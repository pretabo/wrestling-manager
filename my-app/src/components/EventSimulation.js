import React from 'react';

function EventSimulation({ matches, matchResult, handleNextMatch, wrestlers }) {
  if (!matches || matches.length === 0) {
    return <div>No matches available</div>;
  }

  return (
    <div className="event-simulation">
      <h1>Event Simulation</h1>
      <h2>Match Summary</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
      <h2>Current Match</h2>
      <p>{matchResult}</p>
      <button onClick={handleNextMatch}>Next Match</button>
      <h2>Wrestlers</h2>
      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Wrestler 1</th>
            <th>Wrestler 2</th>
          </tr>
        </thead>
        <tbody>
          {wrestlers.map((match, index) => (
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

export default EventSimulation;