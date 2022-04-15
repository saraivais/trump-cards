import React from 'react';
import propTypes from 'prop-types';
import './GenericInput.css';

class GenericInput extends React.Component {
  render() {
    const {
      inputName,
      inputType,
      testId,
      valueShown,
      changeFunc,
      labelText,
    } = this.props;
    return (
      <label className="label" htmlFor={ inputName }>
        { labelText }
        <input
          className="gen-input"
          name={ inputName }
          type={ inputType }
          value={ valueShown }
          onChange={ changeFunc }
          data-testid={ testId }
        />
      </label>);
  }
}

GenericInput.propTypes = {
  inputName: propTypes.string.isRequired,
  inputType: propTypes.string.isRequired,
  testId: propTypes.string.isRequired,
  valueShown: propTypes.string.isRequired,
  changeFunc: propTypes.func.isRequired,
  labelText: propTypes.string.isRequired,
};

export default GenericInput;
