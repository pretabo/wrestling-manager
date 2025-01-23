import React from 'react';

function EventSimulation({ matches, matchResult, handleNextMatch }) {
  return (
    <div>
      {matches.length > 0 ? (
        <div>
          <div className="matches-list">
            {matches.map((match, index) => (
              <div key={index} className="match-item">
                <p>{match}</p>
              </div>
            ))}
          </div>
          <div className="match-result">
            {matchResult && <p>{matchResult}</p>}
          </div>
          <div className="match-simulation">
            {/* Empty block for text simulation of the match */}
          </div>
          <button className="pretty-button" onClick={handleNextMatch}>Next Match</button>
        </div>
      ) : (
        <p>No matches to display.</p>
      )}
    </div>
  );
}

export default EventSimulation;