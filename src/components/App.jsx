import styles from './App.module.css';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Statistics from 'components/Statistics/Statistics';

import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  increamentalStateField = stateField => {
    this.setState({ ...this.state, [stateField]: this.state[stateField] + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
      : 0;
  };

  render() {
    const { wrapper } = styles;
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={wrapper}>
        <Section title="Phonebook">
          <ContactForm
            options={options}
            onLeaveFeedback={this.increamentalStateField}
          />
        </Section>
        <Section title="Contacts">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
