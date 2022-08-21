import styles from './Statistics.module.css';

import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total,positivePercentage } = this.props;
    const {
      statistics__wrapper,
      statistics__label,
      statistics__value,
      statistics__text,
    } = styles;

    return (
      <div className={statistics__wrapper}>
        <p className={statistics__text}>
          <span className={statistics__label}>Good: </span>
          <span className={statistics__value}>{good}</span>
        </p>
        <p className={statistics__text}>
          <span className={statistics__label}>Neutral: </span>
          <span className={statistics__value}>{neutral}</span>
        </p>
        <p className={statistics__text}>
          <span className={statistics__label}>Bad: </span>
          <span className={statistics__value}>{bad}</span>
        </p>
        <p className={statistics__text}>
          <span className={statistics__label}>Total: </span>
          <span className={statistics__value}>{total}</span>
        </p>
        <p className={statistics__text}>
          <span className={statistics__label}>Positive feedback: </span>
          <span className={statistics__value}>{positivePercentage}%</span>
        </p>
      </div>
    );
  }
}

export default Statistics;
