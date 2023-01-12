import Widget from 'components/Widget';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      const { good, neutral, bad } = prevState;
      return { total: Number(good + neutral + bad) };
    });
  };
  addNewStatistics = (option, totalFeedback) => {
    console.log(option);
    this.setState(prevState => {
      switch (option.toLowerCase()) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };

        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return;
      }
    }, totalFeedback());
  };
  render() {
    return (
      <>
        <Widget title="Please leave feedback!">
          <FeedbackOptions
            countTotalFeedback={this.countTotalFeedback}
            updateStats={this.addNewStatistics}
            options={['Good', 'Neutral', 'Bad']}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
          />
        </Widget>
      </>
    );
  }
}
