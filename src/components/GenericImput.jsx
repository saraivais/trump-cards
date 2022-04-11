import React from 'react';
import propTypes from 'prop-types';

class GenericImput extends React.Component {
  render() {
    const { inputType, testId, valueShown, changeFunc } = this.props;
    return (<input
      type={ inputType }
      value={ valueShown }
      onChange={ changeFunc }
      data-testid={ testId }
    />);
  }
}

GenericImput.propTypes = {
  inputType: propTypes.string.isRequired,
  testId: propTypes.string.isRequired,
  valueShown: propTypes.string.isRequired,
  changeFunc: propTypes.func.isRequired,
};

export default GenericImput;
