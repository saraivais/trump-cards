import React from 'react';
import propTypes from 'prop-types';

class GenericImput extends React.Component {
  render() {
    const { inputType, testId } = this.props;
    return <input type={ inputType } data-testid={ testId } />;
  }
}

GenericImput.propTypes = {
  inputType: propTypes.string.isRequired,
  testId: propTypes.string.isRequired,
};

export default GenericImput;
