import React from 'react';
import propTypes from 'prop-types';

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
    } = this.props;

    return (
      <div>
        <div>
          <p data-testid="name-card">{cardName}</p>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo === true
              ? <div data-testid="trunfo-card">Super Trunfo</div> : <div />
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
};

export default Card;
