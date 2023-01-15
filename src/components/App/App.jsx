import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
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
      return { [option]: prevState[option] + 1 };
    });
  };
  render() {
    return (
      <div
        style={{
          padding: 100,
          color: '#DBD7D7',
          backgroundColor: '#22232B',
        }}
      >
        <div
          style={{
            padding: 20,
            backgroundColor: ' #32343b',
            borderRadius: 10,
          }}
        >
          <Section title="Please leave feedback!">
            <FeedbackOptions
              updateStats={this.addNewStatistics}
              options={['Good', 'Neutral', 'Bad']}
            />
          </Section>
          <Section title="Statistics:">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback!" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
