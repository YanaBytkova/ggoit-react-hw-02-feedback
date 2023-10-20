import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
// import Section from 'components/Section/Section';

import css from './App.module.css';
// const Button = ({ calcStatistic, label }) => (
//       <button type="button" onClick={countTotalFeedback}>
//         {label}
//       </button>
//     );
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0, 
    total: 0,
    positivePercentage: 0
  };

  // handleGood = () => {

  //   this.setState({ good: this.state.good + 1 });
    
  // };
  // handleNeutral = () => {

    
  //   this.setState({ neutral: this.state.neutral + 1 });
    
  // };
  // handleBad = () => {

  //   this.setState({ bad: this.state.bad + 1 });
  // };

  countTotalFeedback = evt => {
    const count = evt.target.textContent;
    if (count === 'Good') {
      this.setState({
        good: this.state.good + 1,
        total: this.state.total + 1,
        
      });
      // countPositiveFeedbackPercentage()
    }
    if (count === 'Neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
        total: this.state.total + 1
      });
    }
    if (count === 'Bad') {

      this.setState({
        bad: this.state.bad + 1,
        total: this.state.total + 1
      });
    }
    
  
    // const positive = this.state.good;
    // console.log("positive" , positive);
    // this.setState({ positivePercentage: this.state.positivePercentage + positive });
  }
  
  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const total = this.state.total;
    const positivePercentage = (positive / total) * 100;
    console.log("positivePercentage" , positivePercentage)
    this.setState({ positivePercentage: positivePercentage });
  }

  render() {
    return (
      <div>
        
          <h1>Please leave feedback</h1>
          <div className={css.buttonContainer}> 
            <Button onClick={this.handleGood} countTotalFeedback={this.countTotalFeedback}  label="Good" />
            <Button onClick={this.handleNeutral} countTotalFeedback={this.countTotalFeedback} label="Neutral" />
            <Button onClick={this.handleBad} countTotalFeedback={this.countTotalFeedback} label="Bad" />
            {/* <button onClick={this.handleGood}>Good</button>
            <button onClick={this.handleNeutral}>Neutral</button>
            <button onClick={this.handleBad}>Bad</button> */}
          </div>
          {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
          <h2>Statastics</h2>
          <div className={css.statistContainer}>
            <b>Good: {this.state.good}</b>
            <b>Neutral: {this.state.neutral}</b>
            <b>Bad: {this.state.bad}</b>
            <b>Total: {this.state.total}</b>
            <b>Positive Feadback: {this.state.positivePercentage}</b>
          </div>
          
          

          {/* {this.state.counterValue >= 5 && (
            <div>
              Congrats! You won the discount promocode 20% OFF - #R3DW1E3🎉
            </div>
          )} */}
      
          </div>
    )
  }
}
