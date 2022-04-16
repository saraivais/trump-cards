import React from 'react';
import propTypes from 'prop-types';
import GenericInput from './GenericInput';
import '../style/Form.css';

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
      hasTrunfo,
    } = this.props;
    return (
      <div className="entry-form">
        <GenericInput
          inputName="Name"
          valueShown={ cardName }
          changeFunc={ onInputChange }
          inputType="text"
          testId="name-input"
          labelText="Nome da carta:"
        />
        <GenericInput
          inputName="Description"
          valueShown={ cardDescription }
          changeFunc={ onInputChange }
          inputType="textarea"
          testId="description-input"
          labelText="Descrição da carta:"
        />
        <GenericInput
          inputName="Attr1"
          valueShown={ cardAttr1 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr1-input"
          labelText="Atributo 1:"
        />
        <GenericInput
          inputName="Attr2"
          valueShown={ cardAttr2 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr2-input"
          labelText="Atributo 2:"
        />
        <GenericInput
          inputName="Attr3"
          valueShown={ cardAttr3 }
          changeFunc={ onInputChange }
          inputType="number"
          testId="attr3-input"
          labelText="Atributo 3:"
        />
        <GenericInput
          inputName="Image"
          valueShown={ cardImage }
          changeFunc={ onInputChange }
          inputType="text"
          testId="image-input"
          labelText="URL da imagem:"
        />
        <label className="label" htmlFor="Rarity">
          Selecione a Raridade:
          <select
            className="select-rar"
            name="Rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          !hasTrunfo ? (
            <label className="label" htmlFor="Trunfo">
              Super Trunfo
              <input
                className="trunfo-box"
                name="Trunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onClick={ onInputChange }
              />
            </label>)
            : (
              <p
                className="already-trunfo"
              >
                Você já tem um Super Trunfo em seu baralho

              </p>)
        }
        <button
          className="save-btn"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>);
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
  hasTrunfo: propTypes.bool.isRequired,
};

export default Form;
