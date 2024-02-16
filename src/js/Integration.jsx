import React from 'react';
import MortgageForm from './MortgageForm'; // Adjust the path as necessary
import MortgageResults from './MortgageResults'; // Adjust the path as necessary
import AmortizationSchedule from './AmortizationSchedule'; // Assuming you've created this component

export default class App extends React.Component {
  // Your existing constructor, state, methods, etc.

  render() {
    return (
      <div className="app-container">
        <h3>Mortgage Calculator</h3>
        <h1>Will I Be House Poor?</h1>
        <MortgageForm handleChange={this.handleChange} calculateMortgage={this.calculateMortgage} state={this.state} />
        <MortgageResults {...this.state} />
        {/* Ensure the state has necessary properties for AmortizationSchedule to work */}
        <AmortizationSchedule balance={this.state.balance} rate={this.state.rate} term={this.state.term} />
        <p>*According to the NFCC...</p>
      </div>
    );
  }
}
