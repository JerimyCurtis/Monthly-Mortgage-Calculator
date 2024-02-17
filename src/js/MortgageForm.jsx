import React from 'react';
// import Draggable from './Draggable';

const MortgageForm = ({ handleChange, calculateMortgage, state }) => {
  return (
    // <div className="draggable-wrapper">
    // <Draggable>
    <form onSubmit={calculateMortgage}>
      <div className="margin-bottom-15">
        <input className="input-field" type="number" name="balance" placeholder="Mortgage Balance" value={state.balance} onChange={handleChange} />
      </div>
      <div className="margin-bottom-15">
        <input className="input-field" type="number" step="0.01" name="rate" placeholder="Interest Rate" value={state.rate} onChange={handleChange} />
      </div>
      <div className="margin-bottom-15">
        <select className="select-field" name="term" value={state.term} onChange={handleChange}>
          <option value="15">15 years</option>
          <option value="30">30 years</option>
        </select>
      </div>
      <div className="margin-bottom-15">
        <input className="input-field" type="number" name="monthlyIncome" placeholder="Monthly Income" value={state.monthlyIncome} onChange={handleChange} />
      </div>
      <div className="margin-bottom-15">
        <input className="input-field" type="number" name="utilities" placeholder="Utilities" value={state.utilities} onChange={handleChange} />
      </div>
      <div className="margin-bottom-15">
        <input className="input-field" type="number" name="insurance" placeholder="Insurance" value={state.insurance} onChange={handleChange} />
      </div>
      <button className="submit-button" name="submit" type="submit">Calculate</button>
    </form>
    /* </Draggable>
    </div> */
  );
};

export default MortgageForm;
