import companies from './companies';

const userCompany = companies.find(company => company.shorthand === 'GWF');

export default userCompany;