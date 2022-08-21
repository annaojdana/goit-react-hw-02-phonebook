import styles from './Section.module.css';

import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { heading } = styles;
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={heading}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
