import styles from './App.module.css';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
// import Statistics from 'components/Statistics/Statistics';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      const filteredNumber = contacts.filter(
        contact => contact.number === number
      )[0].name;
      console.log(filteredNumber);
      alert(`${number} is already in contact with ${filteredNumber} `);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    const { wrapper } = styles;
    return (
      <div className={wrapper}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          {/* {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )} */}
        </Section>
      </div>
    );
  }
}

export default App;
