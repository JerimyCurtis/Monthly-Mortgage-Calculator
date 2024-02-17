import React from 'react';
// import Draggable from './Draggable';

class AmortizationSchedule extends React.Component {
  calculateSchedule() {
    const { balance, rate, term } = this.props;
    const principal = parseFloat(balance);
    const interestRate = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(term) * 12;
    let schedule = [];
    let remaining = principal;

    for (let i = 0; i < payments; i++) {
      const interest = remaining * interestRate;
      const appliedToPrincipal = (interestRate === 0 ? principal / payments : (principal * interestRate * Math.pow((1 + interestRate), payments)) / (Math.pow((1 + interestRate), payments) - 1)) - interest;
      remaining -= appliedToPrincipal;

      schedule.push({
        paymentNumber: i + 1,
        payment: appliedToPrincipal + interest,
        principal: appliedToPrincipal,
        interest: interest,
        balance: remaining > 0 ? remaining : 0
      });
    }

    return schedule;
  }

  renderSchedule(schedule) {
    return schedule.map((item, index) => (
      <tr key={index}>
        <td>{item.paymentNumber}</td>
        <td>${item.payment.toFixed(2)}</td>
        <td>${item.principal.toFixed(2)}</td>
        <td>${item.interest.toFixed(2)}</td>
        <td>${item.balance.toFixed(2)}</td>
      </tr>
    ));
  }

  render() {
    const schedule = this.calculateSchedule();

    return (
      // <div className="draggable-wrapper">
      // <Draggable>
      <div className="amortization-container">
        <h3>Amortization Schedule</h3> 
        <div className="schedule-table-container" style={{overflowY: 'auto', maxHeight: '550px'}}> 
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSchedule(schedule)}
            </tbody>
          </table>
        </div>
      </div>
    // </Draggable> 
    // </div>
    );
  }
}

export default AmortizationSchedule;
