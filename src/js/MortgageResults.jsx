import React from 'react';

const MortgageResults = ({ monthlyPayment, incidentals, totalPayments, housePoorMessage }) => {
  return (
    <div id="output">
      <h4>Monthly Mortgage Payment: ${monthlyPayment}</h4>
      <h4>Incidentals: ${incidentals}</h4>
      <h4>Total Payments: ${totalPayments}</h4>
      <h4>{housePoorMessage}</h4>
    </div>
  );
};

export default MortgageResults;
