import styles from './Filter.module.css';
import React from 'react';

class Filter extends React.Component {
  render() {
    const { onChange } = this.props;
    const { field, text, input } = styles;
    return (
      <div className={field}>
        <p className={text}>Find contact by name</p>
        <input className={input} type="text" onChange={onChange} />
      </div>
    );
  }
}

export default Filter;
