import React from 'react';
import propTypes from 'prop-types';
import '../style/Card.css';

class Card extends React.Component {
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
      deleteBtn,
      isPreview,
    } = this.props;

    return (
      <div className="card">
        <div className="top-side">
          <p className="card-name" data-testid="name-card">{cardName}</p>
          <img
            className="card-img"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p
            className="card-description"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
        </div>
        <div className="bottom-side">
          <p className="card-attr" data-testid="attr1-card">{ cardAttr1 }</p>
          <p className="card-attr" data-testid="attr2-card">{ cardAttr2 }</p>
          <p className="card-attr" data-testid="attr3-card">{ cardAttr3 }</p>
          <p className="card-rarity" data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo === true
              ? (
                <div
                  className="trunfo"
                  data-testid="trunfo-card"
                >
                  Super Trunfo
                </div>) : null
          }
          {
            isPreview === true
              ? null
              : (
                <button
                  className="delete-btn"
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => deleteBtn(cardName) }
                >
                  Excluir
                </button>)
          }
        </div>
      </div>);
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  deleteBtn: propTypes.func.isRequired,
  isPreview: propTypes.bool.isRequired,
};

export default Card;
