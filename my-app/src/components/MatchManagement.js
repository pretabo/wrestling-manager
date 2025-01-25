import React, { useContext, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyContext } from '../contexts/CompanyContext';

function MatchManagement({ onBack, onPlayEvent }) {
  const { eventId } = useParams();
  const { companyEvents } = useContext(CompanyContext);
  const event = companyEvents.find(event => event.id === eventId);
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

  return (
    <div>
      <h1>Manage Matches for {event.name}</h1>
      {/* Render matches and other UI elements */}
    </div>
  );
}

export default MatchManagement;