import React, { useContext } from 'react';
import { CompanyContext } from '../contexts/CompanyContext';

function Roster() {
  const { roster } = useContext(CompanyContext);

  return (
    <div className="roster">
      <h2>Roster</h2>
      <p>This is the roster of participants for the event.</p>
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
          </tr>
        </thead>
        <tbody>
          {roster.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.showmanship}</td>
              <td>{member.charisma}</td>
              <td>{member.technicalAbility}</td>
              <td>{member.physicalCondition}</td>
              <td>{member.brawling}</td>
              <td>{member.highFlying}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Roster;