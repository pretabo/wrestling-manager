import React, { createContext, useState, useEffect } from 'react';
import events from '../events';
import wrestlers from '../wrestlersDirectory';

export const CompanyContext = createContext({
  companyStats: {
    totalMoney: 1000,
    wrestlers: 20,
    upcomingEvents: []
  },
  companyEvents: [],
  roster: [],
  setCompanyStats: () => {},
  setCompanyEvents: () => {},
  setRoster: () => {}
});

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState({ shorthand: 'GWF' }); // Default to the user's company
  const [roster, setRoster] = useState([]);
  const [companyEvents, setCompanyEvents] = useState(events.GWF); // Default to GWF events

  useEffect(() => {
    const filteredRoster = wrestlers.filter(wrestler => wrestler.companyShorthand === company.shorthand);
    setRoster(filteredRoster);
  }, [company]);

  return (
    <CompanyContext.Provider value={{ companyStats: { totalMoney: 1000, wrestlers: roster.length, upcomingEvents: companyEvents }, companyEvents, roster, setCompanyStats: setCompany, setCompanyEvents, setRoster }}>
      {children}
    </CompanyContext.Provider>
  );
};