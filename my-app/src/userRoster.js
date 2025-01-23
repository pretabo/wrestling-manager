import wrestlers from './wrestlersDirectory';

// Initial roster with a subset of wrestlers
const userRoster = wrestlers.slice(0, 3);

// Assign the company to each wrestler in the user's roster
userRoster.forEach(wrestler => {
  wrestler.company = 'User Company';
});

export default userRoster;