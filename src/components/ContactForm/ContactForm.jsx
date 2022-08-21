import styles from './ContactForm.module.css';
import { Button } from 'components/Button/Button';
import React from 'react';

class ContactForm extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const { form, form__field, label, input } = styles;
    return (
      <form className={form}>
        <div className={form__field}>
          <label htmlFor="contactName" className={label}>
            Name
          </label>
          <input
            className={input}
            id="contactName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={form__field}>
          <label htmlFor="contactTel" className={label}>
            Phone number
          </label>
          <input
            className={input}
            id="contactTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <Button
          type="submit"
          title="Add contact"
          onClick={() => {
            onLeaveFeedback(options[0]);
          }}
        ></Button>
      </form>
    );
  }
}

export default ContactForm;
