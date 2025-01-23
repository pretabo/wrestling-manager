import React, { useContext } from 'react';
import { CompanyContext } from '../contexts/CompanyContext';
import companies from '../companies';

function CompanySelector() {
  const { setCompany } = useContext(CompanyContext);

  const handleCompanyChange = (event) => {
    const selectedCompany = companies.find(company => company.name === event.target.value);
    setCompany(selectedCompany);
  };

  return (
    <div className="company-selector">
      <label htmlFor="company">Select a Company:</label>
      <select id="company" onChange={handleCompanyChange}>
        {companies.map((company, index) => (
          <option key={index} value={company.name}>{company.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CompanySelector;