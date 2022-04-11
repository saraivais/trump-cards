import React from 'react';
import propTypes from 'prop-types';
import GenericImput from './GenericImput';
// hasTrunfo, hasTrunfo: propTypes.bool.isRequired,

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <GenericImput
          inputName="Name"
          valueShown={ cardName }
          changeFunc={ onInputChange }
          inputType="text"
          testId="name-input"
        />
        <GenericImput
          inputName="Description"
          valueShown={ cardDescription }
          changeFunc={ onInputChange }
          inputType="textarea"
          testId="description-input"
        />
        <GenericImput
          inputName="Attr1"
          valueShown={ cardAttr1 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr1-input"
        />
        <GenericImput
          inputName="Attr2"
          valueShown={ cardAttr2 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr2-input"
        />
        <GenericImput
          inputName="Attr3"
          valueShown={ cardAttr3 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr3-input"
        />
        <GenericImput
          inputName="Image"
          valueShown={ cardImage }
          changeFunc={ onInputChange }
          inputType="text"
          testId="image-input"
        />
        <select
          name="Rarity"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          name="Trunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onClick={ onInputChange }
        />
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </>);
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
