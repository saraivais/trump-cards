import React from 'react';
import propTypes from 'prop-types';

class FilterInput extends React.Component {
  render() {
    const { inputName, placeHolder, testId, inputValue, changeFunc } = this.props;
    return (
      <label htmlFor={ inputName }>
        <input
          value={ inputValue }
          type="text"
          name={ inputName }
          placeholder={ placeHolder }
          data-testid={ testId }
          onChange={ changeFunc }
        />
      </label>
    );
  }
}

FilterInput.propTypes = {
  inputName: propTypes.string.isRequired,
  placeHolder: propTypes.string.isRequired,
  testId: propTypes.string.isRequired,
  inputValue: propTypes.string.isRequired,
  changeFunc: propTypes.func.isRequired,
};

export default FilterInput;
