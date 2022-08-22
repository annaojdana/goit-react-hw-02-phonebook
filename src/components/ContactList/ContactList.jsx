import styles from './ContactList.module.css';

import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, removeContact } = this.props;
    const { wrapper, text, button } = styles;

    return (
      <ul className={wrapper}>
        {contacts.map(contact => {
          return (
            <li className={text} key={contact.id}>
              <span>{`${contact.name}: ${contact.number}`}</span>
              <button
                type="button"
                className={button}
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
