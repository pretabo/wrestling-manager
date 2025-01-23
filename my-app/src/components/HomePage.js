import React from 'react';

function HomePage({ companyStats }) {
  return (
    <div className="home-page">
      <h1>Company Stats</h1>
      <p>Total Money: ${companyStats.totalMoney}</p>
      <p>Wrestlers on Roster: {companyStats.wrestlers}</p>
      <h2>Upcoming Events</h2>
      {companyStats.upcomingEvents.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>
          <ul>
            {event.matches.map((match, matchIndex) => (
              <li key={matchIndex}>{match}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HomePage;