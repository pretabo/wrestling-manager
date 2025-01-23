import React, { useContext, useState, useRef } from 'react';
import { CompanyContext } from '../contexts/CompanyContext';

function MatchManagement({ event, onBack, onPlayEvent }) {
  const { roster, companyEvents, setCompanyEvents } = useContext(CompanyContext);
  const [matches, setMatches] = useState(event.matches);
  const [selectedPosition, setSelectedPosition] = useState({ matchIndex: null, wrestlerPosition: null });
  const saveButtonRef = useRef(null);

  const handleDragStart = (event, wrestler) => {
    event.dataTransfer.setData('text/plain', wrestler.name);

    const dragImage = document.createElement('div');
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-9999px';
    dragImage.style.left = '-9999px';
    dragImage.style.padding = '5px 10px';
    dragImage.style.backgroundColor = 'var(--light-purple)';
    dragImage.style.color = 'var(--dark-purple)';
    dragImage.style.border = '1px solid var(--light-text)';
    dragImage.style.borderRadius = '4px';
    dragImage.innerText = wrestler.name;
    document.body.appendChild(dragImage);

    event.dataTransfer.setDragImage(dragImage, 0, 0);
  };

  const handleDrop = (event, matchIndex, wrestlerPosition) => {
    event.preventDefault();
    const wrestlerName = event.dataTransfer.getData('text/plain');
    const wrestler = roster.find(w => w.name === wrestlerName);
    if (wrestler) {
      const newMatches = [...matches];
      newMatches[matchIndex][wrestlerPosition] = wrestler;
      setMatches(newMatches);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const addMatch = () => {
    setMatches([...matches, { wrestler1: null, wrestler2: null }]);
  };

  const saveMatches = () => {
    const updatedEvents = companyEvents.map((evt) => {
      if (evt.name === event.name) {
        return { ...evt, matches };
      }
      return evt;
    });
    setCompanyEvents(updatedEvents);

    // Change button appearance and text
    const saveButton = saveButtonRef.current;
    saveButton.classList.add('saved');
    saveButton.textContent = 'Saved';
    setTimeout(() => {
      saveButton.classList.remove('saved');
      saveButton.textContent = 'Save Matches';
    }, 2000);
  };

  const handlePositionSelect = (matchIndex, wrestlerPosition) => {
    setSelectedPosition({ matchIndex, wrestlerPosition });
  };

  const handleAddWrestlerToPosition = (wrestler) => {
    const { matchIndex, wrestlerPosition } = selectedPosition;
    if (matchIndex !== null && wrestlerPosition !== null) {
      const newMatches = [...matches];
      newMatches[matchIndex][wrestlerPosition] = wrestler;
      setMatches(newMatches);
      setSelectedPosition({ matchIndex: null, wrestlerPosition: null });
    } else {
      alert('Please select a position first.');
    }
  };

  return (
    <div className="match-management">
      <button className="pretty-button" onClick={onBack}>Back to Events</button>
      <h2>{event.name} - Matches</h2>
      <div className="match-management-container">
        <div className="roster-column">
          <h3>Roster</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((wrestler, index) => (
                <tr key={index} draggable onDragStart={(event) => handleDragStart(event, wrestler)}>
                  <td>{wrestler.name}</td>
                  <td>
                    <button className="pretty-button" onClick={() => handleAddWrestlerToPosition(wrestler)}>
                      Add to Position
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="matches-column">
          <h3>Matches</h3>
          <table>
            <thead>
              <tr>
                <th>Wrestler 1</th>
                <th>Wrestler 2</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td
                    onClick={() => handlePositionSelect(index, 'wrestler1')}
                    onDrop={(event) => handleDrop(event, index, 'wrestler1')}
                    onDragOver={handleDragOver}
                    className={`drop-zone ${selectedPosition.matchIndex === index && selectedPosition.wrestlerPosition === 'wrestler1' ? 'selected-position' : ''}`}
                  >
                    {match.wrestler1 ? match.wrestler1.name : 'Drop Wrestler 1 Here'}
                  </td>
                  <td
                    onClick={() => handlePositionSelect(index, 'wrestler2')}
                    onDrop={(event) => handleDrop(event, index, 'wrestler2')}
                    onDragOver={handleDragOver}
                    className={`drop-zone ${selectedPosition.matchIndex === index && selectedPosition.wrestlerPosition === 'wrestler2' ? 'selected-position' : ''}`}
                  >
                    {match.wrestler2 ? match.wrestler2.name : 'Drop Wrestler 2 Here'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="pretty-button" onClick={addMatch}>Add Match</button>
          <button className="pretty-button" ref={saveButtonRef} onClick={saveMatches}>Save Matches</button>
          <button className="pretty-button" onClick={onPlayEvent}>Play Event</button>
        </div>
      </div>
    </div>
  );
}

export default MatchManagement;