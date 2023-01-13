import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    // console.log(good + bad + neutral);
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = 100;
    const formula = (good / total) * percentage;

    return Number(formula.toFixed(0));
  };
  addNewStatistics = option => {
    this.setState(prevState => {
      console.log(option);
      return { [option]: prevState[option] + 1 };
    });
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            updateStats={this.addNewStatistics}
            options={['Good', 'Neutral', 'Bad']}
          />
        </Section>
        <Section title="Statistics:">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
