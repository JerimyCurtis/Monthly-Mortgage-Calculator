// import React from 'react';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       balance: '',
//       rate: '',
//       term: '15',
//       monthlyPayment: '0',
//       monthlyIncome: '',
//       utilities: '',
//       insurance: '',
//       housePoorMessage: '',
//       incidentals: '0',
//       totalPayments: '0',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.calculateMortgage = this.calculateMortgage.bind(this);
//     this.updateHousePoorStatus = this.updateHousePoorStatus.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value }, this.updateHousePoorStatus);
//   }

//   updateHousePoorStatus() {
//     const { monthlyPayment, monthlyIncome, utilities, insurance } = this.state;
//     if (monthlyIncome) {
//       const totalExpenses = parseFloat(monthlyPayment) + parseFloat(utilities || 0) + parseFloat(insurance || 0);
//       const incidentals = parseFloat(utilities || 0) + parseFloat(insurance || 0);
//       const totalPayments = totalExpenses;
//       this.setState({
//         incidentals: incidentals.toFixed(2),
//         totalPayments: totalPayments.toFixed(2),
//       });

//       const incomeThreshold = parseFloat(monthlyIncome) * 0.3;
//       if (totalExpenses > incomeThreshold) {
//         this.setState({ housePoorMessage: "*You're House Poor, Get Another Job!!" });
//       } else {
//         this.setState({ housePoorMessage: '*You can afford to relax some. Keep up the good work!' });
//       }
//     }
//   }

//   calculateMortgage(event) {
//     event.preventDefault();
//     const { balance, rate, term } = this.state;
//     const P = parseFloat(balance);
//     const r = parseFloat(rate) / 100 / 12;
//     const n = parseFloat(term) * 12;
//     const monthlyPayment = r === 0 ? P / n : P * r * (Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
//     this.setState({
//       monthlyPayment: monthlyPayment.toFixed(2)
//     }, this.updateHousePoorStatus);
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h3>Mortgage Calculator</h3>
//         <h1>Will I Be House Poor?</h1>
//         <form onSubmit={this.calculateMortgage}>
//           <div className="margin-bottom-15">
//             <input className="input-field" type="number" name="balance" placeholder="Mortgage Balance" value={this.state.balance} onChange={this.handleChange} />
//           </div>
//           <div className="margin-bottom-15">
//             <input className="input-field" type="number" step="0.01" name="rate" placeholder="Interest Rate" value={this.state.rate} onChange={this.handleChange} />
//           </div>
//           <div className="margin-bottom-15">
//             <select className="select-field" name="term" value={this.state.term} onChange={this.handleChange}>
//               <option value="15">15 years</option>
//               <option value="30">30 years</option>
//             </select>
//           </div>
//           <div className="margin-bottom-15">
//             <input className="input-field" type="number" name="monthlyIncome" placeholder="Monthly Income" value={this.state.monthlyIncome} onChange={this.handleChange} />
//           </div>
//           <div className="margin-bottom-15">
//             <input className="input-field" type="number" name="utilities" placeholder="Utilities" value={this.state.utilities} onChange={this.handleChange} />
//           </div>
//           <div className="margin-bottom-15">
//             <input className="input-field" type="number" name="insurance" placeholder="Insurance" value={this.state.insurance} onChange={this.handleChange} />
//           </div>
//           <button className="submit-button" name="submit" type="submit">Calculate</button>
//         </form>
//         <h4>Monthly Mortgage Payment: ${this.state.monthlyPayment}</h4>
//         <h4>Incidentals: ${this.state.incidentals}</h4>
//         <h4>Total Payments: ${this.state.totalPayments}</h4>
//         <h4>{this.state.housePoorMessage}</h4>
//         <p>*According to the NFCC, housing should make up less than 30% of a household income. This includes mortgage payments, as well as utilities and any other expenses, such as insurance or HOA fees.</p>
//       </div>
//     );
//   }
// }

import React from 'react';
import MortgageForm from './MortgageForm'; // Make sure this path matches your file structure
import MortgageResults from './MortgageResults'; // Make sure this path matches your file structure
import AmortizationSchedule from './AmortizationSchedule'; // Assuming you've created this component

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '15',
      monthlyPayment: '0',
      monthlyIncome: '',
      utilities: '',
      insurance: '',
      housePoorMessage: '',
      incidentals: '0',
      totalPayments: '0',
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculateMortgage = this.calculateMortgage.bind(this);
    this.updateHousePoorStatus = this.updateHousePoorStatus.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, this.updateHousePoorStatus);
  }

  updateHousePoorStatus() {
    const { monthlyPayment, monthlyIncome, utilities, insurance } = this.state;
    if (monthlyIncome) {
      const totalExpenses = parseFloat(monthlyPayment) + parseFloat(utilities || 0) + parseFloat(insurance || 0);
      const incidentals = parseFloat(utilities || 0) + parseFloat(insurance || 0);
      const totalPayments = totalExpenses;
      this.setState({
        incidentals: incidentals.toFixed(2),
        totalPayments: totalPayments.toFixed(2),
      });

      const incomeThreshold = parseFloat(monthlyIncome) * 0.3;
      if (totalExpenses > incomeThreshold) {
        this.setState({ housePoorMessage: "*You're House Poor, Get Another Job!!" });
      } else {
        this.setState({ housePoorMessage: '*You can afford to relax some. Keep up the good work!' });
      }
    }
  }

  calculateMortgage(event) {
    event.preventDefault();
    const { balance, rate, term } = this.state;
    const P = parseFloat(balance);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    const monthlyPayment = r === 0 ? P / n : P * r * (Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    this.setState({
      monthlyPayment: monthlyPayment.toFixed(2)
    }, this.updateHousePoorStatus);
  }

  render() {
    return (
      <div className="app-container">
        <h3>Mortgage Calculator</h3>
        <h1>Will I Be House Poor?</h1>
        <MortgageForm handleChange={this.handleChange} calculateMortgage={this.calculateMortgage} state={this.state} />
        <MortgageResults {...this.state} />
        <AmortizationSchedule balance={this.state.balance} rate={this.state.rate} term={this.state.term} />
        <p>*According to the NFCC, housing should make up less than 30% of a household income. This includes mortgage payments, as well as utilities and any other expenses, such as insurance or HOA fees.</p>
      </div>
    );
  }
}
