import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { allCards } = this.props;
    return (
      <div>
        {
          allCards.map((
            {
              Name,
              Description,
              Attr1,
              Attr2,
              Attr3,
              Image,
              Rarity,
              Trunfo }, index,
          ) => (
            <Card
              key={ index }
              cardName={ Name }
              cardDescription={ Description }
              cardAttr1={ Attr1 }
              cardAttr2={ Attr2 }
              cardAttr3={ Attr3 }
              cardImage={ Image }
              cardRare={ Rarity }
              cardTrunfo={ Trunfo }
            />))
        }
      </div>);
  }
}

Deck.propTypes = {
  allCards: propTypes.arrayOf(Object).isRequired,
};

export default Deck;
