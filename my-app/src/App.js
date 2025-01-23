import React, { useState } from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn';
import MainArea from './components/MainArea';
import EventManagement from './components/EventManagement';
import AllWrestlers from './components/AllWrestlers';
import Roster from './components/Roster';
import EventSimulation from './components/EventSimulation';
import HomePage from './components/HomePage';
import WrestlingIndustry from './components/WrestlingIndustry';
import { DateProvider } from './contexts/DateContext';
import { CompanyProvider } from './contexts/CompanyContext';

function App() {
  const [view, setView] = useState('home');
  const [history, setHistory] = useState(['home']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventToday, setEventToday] = useState(false);
  const [matches, setMatches] = useState(['Match 1', 'Match 2', 'Match 3']);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [companyStats, setCompanyStats] = useState({
    totalMoney: 1000000,
    wrestlers: 20,
    upcomingEvents: [
      { name: 'Event 1', matches: ['Match 1', 'Match 2'] },
      { name: 'Event 2', matches: ['Match 3', 'Match 4'] }
    ]
  });

  const handleNextMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const handleViewChange = (newView, event = null) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newView);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setView(newView);
    if (event) {
      setSelectedEvent(event);
      setEventToday(true);
    }
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setView(history[newIndex]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setView(history[newIndex]);
    }
  };

  return (
    <DateProvider>
      <CompanyProvider>
        <div className="app-container">
          <LeftColumn handleViewChange={handleViewChange} onBack={handleBack} onForward={handleForward} />
          <div className="right-column">
            {view === 'home' && <HomePage companyStats={companyStats} />}
            {view === 'main' && (
              <div className="main-view">
                <MainArea />
                <EventManagement />
                <AllWrestlers />
                <Roster />
              </div>
            )}
            {view === 'eventManagement' && <EventManagement />}
            {view === 'allWrestlers' && <AllWrestlers />}
            {view === 'wrestlingIndustry' && <WrestlingIndustry />}
            {view === 'eventSimulation' && matches && matches.length > 0 && (
              <EventSimulation 
                matches={matches} 
                matchResult={`Result of ${matches[currentMatchIndex]}`} 
                handleNextMatch={handleNextMatch} 
              />
            )}
          </div>
        </div>
      </CompanyProvider>
    </DateProvider>
  );
}

export default App;
