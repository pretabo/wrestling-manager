import React from 'react';
import wrestlers from '../wrestlersDirectory';

function AllWrestlers() {
  return (
    <div className="all-wrestlers">
      <h2>All Wrestlers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Showmanship</th>
            <th>Charisma</th>
            <th>Technical Ability</th>
            <th>Physical Condition</th>
            <th>Brawling</th>
            <th>High Flying</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {wrestlers.map((wrestler, index) => (
            <tr key={index}>
              <td>{wrestler.name}</td>
              <td>{wrestler.showmanship}</td>
              <td>{wrestler.charisma}</td>
              <td>{wrestler.technicalAbility}</td>
              <td>{wrestler.physicalCondition}</td>
              <td>{wrestler.brawling}</td>
              <td>{wrestler.highFlying}</td>
              <td>{wrestler.companyShorthand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllWrestlers;