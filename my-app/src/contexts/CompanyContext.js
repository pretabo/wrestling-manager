import React, { createContext, useState, useEffect } from 'react';
import companies from '../companies';
import wrestlers from '../wrestlersDirectory';
import userCompany from '../userCompany';
import events from '../events';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState(userCompany); // Default to the user's company
  const [roster, setRoster] = useState([]);
  const [companyEvents, setCompanyEvents] = useState(events.GWF); // Default to GWF events

  useEffect(() => {
    const filteredRoster = wrestlers.filter(wrestler => wrestler.companyShorthand === company.shorthand);
    setRoster(filteredRoster);

    // You can add logic here to fetch or update company events if needed
  }, [company]);

  return (
    <CompanyContext.Provider value={{ company, setCompany, roster, companyEvents, setCompanyEvents }}>
      {children}
    </CompanyContext.Provider>
  );
};