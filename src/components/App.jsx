import { Component } from 'react';
// import { Product } from 'components/Product/Product';
// import Section from 'components/Section/Section';

import css from './App.module.css';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGood = () => {

    this.setState({ good: this.state.good + 1 });
    
  };
  handleNeutral = () => {

    
    this.setState({ neutral: this.state.neutral + 1 });
    
  };
  handleBad = () => {

    this.setState({ bad: this.state.bad + 1 });
  };
  // handleDecrement = () => {
  //   if (this.state.counterValue === 0) {
  //     alert('Please, stop! Counter value is already decremented!');
  //     return;
  //   }

  //   this.setState({ counterValue: this.state.counterValue - 1 });
  // };

  // handleDeleteProduct = productId => {
  //   // "3"
  //   // [{id: "1"}, {id: "2"}, {id: "3"}]
  //   // [{id: "1"}, {id: "2"}]
  //   this.setState({
  //     products: this.state.products.filter(product => product.id !== productId),
  //   });
  // };

  render() {
    // const sortedProducts = [...this.state.products].sort(
    //   (a, b) => b.discount - a.discount
    // );
    return (
      <div>
        
          <h1>Please leave feedback</h1>
          <div className={css.buttonContainer}> 
            <button onClick={this.handleGood}>Good</button>
            <button onClick={this.handleNeutral}>Neutral</button>
            <button onClick={this.handleBad}>Bad</button>
          </div>
         
          <h2>Statastics</h2>
          <div className={css.statistContainer}>
            <b>Good: {this.state.good}</b>
            <b>Neutral: {this.state.neutral}</b>
            <b>Bad: {this.state.bad}</b>
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
