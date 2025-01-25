import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../contexts/CompanyContext';

function HomePage() {
  const { companyStats } = useContext(CompanyContext);
  const navigate = useNavigate();

  if (!companyStats) {
    return <div>Wrestling Manager</div>;
  }

  return (
    <div>
      <h1>Welcome to the Wrestling Manager</h1>
      <p>Total Money: {companyStats.totalMoney}</p>
      {/* Other UI elements */}
    </div>
  );
}

export default HomePage;