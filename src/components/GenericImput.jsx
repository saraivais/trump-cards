import React from 'react';

class GenericImput extends React.Component {
  render() {
    const { inputType, testId } = this.props;
    return <input type={ inputType } data-testid={ testId } />;
  }
}

export default GenericImput;
