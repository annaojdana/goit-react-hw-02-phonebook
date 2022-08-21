import styles from './FeedbackOptions.module.css';
import { Button } from 'components/Button/Button';
import goodImg from '../../images/good.png';
import neutralImg from '../../images/neutral.png';
import badImg from '../../images/bad.png';
import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const { btnWrapper } = styles;
    return (
      <div className={btnWrapper}>
        <Button
          title={options[0]}
          img={goodImg}
          onClick={() => {
            onLeaveFeedback(options[0]);
          }}
        ></Button>
        <Button
          title={options[1]}
          img={neutralImg}
          onClick={() => {
            onLeaveFeedback(options[1]);
          }}
        ></Button>
        <Button
          title={options[2]}
          img={badImg}
          onClick={() => {
            onLeaveFeedback(options[2]);
          }}
        ></Button>
      </div>
    );
  }
}

export default FeedbackOptions;
