import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import Section from 'components/Section/Section';
// import Section from 'components/Section/Section';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0, 
    total: 0,
    positivePercentage: 0
  };

  countTotalFeedback = evt => {
    const count = evt.target.textContent;
    const countPositiveFeedbackPercentage = () => {
      const positive = this.state.good;
      const total = this.state.total;
      const positivePercentage = (positive / total) * 100;
      console.log("positivePercentage" , positivePercentage)
      this.setState({ positivePercentage: positivePercentage });
    }
    if (count === 'Good') {
      this.setState({
        good: this.state.good + 1,
        total: this.state.total + 1,
        
      });
      
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
    countPositiveFeedbackPercentage();
  }
  
  

  render() {
    return (
      <div>
        
          <h1>Please leave feedback</h1>
          {this.state.total === 0 && (<Notification message="There is no feedback"></Notification>)}
          
          <Section >
          <div className={css.buttonContainer}>
          <FeedbackOptions
            
            countTotalFeedback={this.countTotalFeedback}
            label="Good" />
          <FeedbackOptions
           
            countTotalFeedback={this.countTotalFeedback}
            label="Neutral" />
          <FeedbackOptions
           
            countTotalFeedback={this.countTotalFeedback}
            label="Bad" />
           </div> 
            

          </Section>
          {this.state.total !== 0 && (<Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          </Section>)}
          
          
          </div>
    )
  }
}
