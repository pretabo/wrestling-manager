import React, { useState, useEffect } from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn';
import MainArea from './components/MainArea';
import EventManagement from './components/EventManagement';
import AllWrestlers from './components/AllWrestlers';
import Roster from './components/Roster';
import EventSimulation from './components/EventSimulation';
import HomePage from './components/HomePage';
import WrestlingIndustry from './components/WrestlingIndustry';
import EventPreview from './components/EventPreview';
import Modal from './components/Modal';
import { DateProvider } from './contexts/DateContext';
import { CompanyProvider, CompanyContext } from './contexts/CompanyContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatchManagement from './components/MatchManagement';


function App() {
  const [view, setView] = useState('home');
  const [history, setHistory] = useState(['home']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventToday, setEventToday] = useState(false);
  const [matches, setMatches] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [companyStats, setCompanyStats] = useState({
    totalMoney: 1000, // Example initial value
    wrestlers: 20,
    upcomingEvents: []
  });
  const [companyEvents, setCompanyEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');



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
      setMatches(event.matches); // Ensure matches are set for the selected event
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

  const checkForEvent = (currentDate) => {
    const event = companyStats.upcomingEvents.find(event => 
      event.date.toDateString() === currentDate.toDateString()
    );
    if (event) {
      setEventToday(true);
      setSelectedEvent(event);
      setMatches(event.matches); // Ensure matches are set for the selected event
      setModalContent(`There is an event today: ${event.name}`);
      setShowModal(true);
      return event;
    } else {
      setEventToday(false);
      setSelectedEvent(null);
      setMatches([]); // Clear matches if no event
      return null;
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <DateProvider>
      <CompanyContext.Provider value={{ companyStats, setCompanyStats, companyEvents, setCompanyEvents }}>
        <Router>
          <div className="app-container">
            <LeftColumn handleViewChange={handleViewChange} onBack={handleBack} onForward={handleForward} checkForEvent={checkForEvent} />
            <div className="right-column">
              <Routes>
                <Route path="/event-management" element={<EventManagement />} />
                <Route path="/match-management/:eventId" element={<MatchManagement />} />
                <Route path="/all-wrestlers" element={<AllWrestlers />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
              {view === 'main' && (
                <div className="main-view">
                  <MainArea />
                  <EventManagement companyStats={companyStats} setCompanyStats={setCompanyStats} handleViewChange={handleViewChange} />
                  <AllWrestlers />
                  <Roster />
                </div>
              )}
              {view === 'allWrestlers' && <AllWrestlers />}
              {view === 'wrestlingIndustry' && <WrestlingIndustry />}
              {view === 'eventSimulation' && matches && matches.length > 0 && (
                <EventSimulation 
                  matches={matches} 
                  matchResult={`Result of ${matches[currentMatchIndex]}`} 
                  handleNextMatch={handleNextMatch} 
                  wrestlers={selectedEvent.wrestlers} // Pass wrestlers to EventSimulation
                />
              )}
              {view === 'eventPreview' && selectedEvent && (
                <EventPreview event={selectedEvent} />
              )}
            </div>
            <Modal show={showModal} onClose={closeModal}>
              <p>{modalContent}</p>
              <button onClick={() => handleViewChange('eventManagement', selectedEvent)} className="pretty-button">Go to Event</button>
            </Modal>
          </div>
        </Router>
      </CompanyContext.Provider>
    </DateProvider>
  );
}

export default App;
