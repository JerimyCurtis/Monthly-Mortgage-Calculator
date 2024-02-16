import React from 'react';
import MortgageForm from './MortgageForm'; 
import MortgageResults from './MortgageResults';
import AmortizationSchedule from './AmortizationSchedule';

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
        <div className="calculator-container">
          <h3>Mortgage Calculator</h3>
          <h1>Will I Be House Poor?</h1>
          <MortgageForm handleChange={this.handleChange} calculateMortgage={this.calculateMortgage} state={this.state} />
          <MortgageResults {...this.state} />
          <p>*According to the NFCC, housing should make up less than 30% of a household income. This includes mortgage payments, as well as utilities and any other expenses, such as insurance or HOA fees.</p>
        </div>
        <div className="amortization-container">
          <AmortizationSchedule balance={this.state.balance} rate={this.state.rate} term={this.state.term} />
        </div>
      </div>
    );
  }
}