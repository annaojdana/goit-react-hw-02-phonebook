import styles from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
class Filter extends React.Component {
  render() {
    const { onChange, filter } = this.props;
    const { field, text, input } = styles;
    return (
      <div className={field}>
        <p className={text}>Find contact by name</p>
        <input
          key={nanoid()}
          className={input}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Filter;
