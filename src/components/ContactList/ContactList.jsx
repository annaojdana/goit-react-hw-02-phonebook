import styles from './ContactList.module.css';

import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props;
    const { wrapper, text, button } = styles;

    return (
      <ul className={wrapper}>
        {contacts.map(contact => {
          return (
            <li className={text} key={contact.id}>
              {`${contact.name}: ${contact.number}`}
              <button
                type="button"
                className={button}
                onClick={onClick(contact.id)}
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
