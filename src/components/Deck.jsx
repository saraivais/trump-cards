import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import './Deck.css';
import FilterInput from './FilterInput';

class Deck extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFilter: '',
      // rarityFilter: '',
      // TrunfoFilter: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { allCards, deleteFunc } = this.props;
    const { nameFilter } = this.state;

    return (
      <div>
        <div className="my-filters">
          <h1>Filtros</h1>
          <FilterInput
            inputValue={ nameFilter }
            inputName="nameFilter"
            placeHolder="Nome da Carta"
            testId="name-filter"
            changeFunc={ this.onInputChange }
          />
        </div>
        <div className="my-deck">
          {
            allCards
              .filter(({ Name }) => Name.includes(nameFilter))
              .map((
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
                  deleteBtn={ deleteFunc }
                  isPreview={ false }
                />))
          }
        </div>
      </div>);
  }
}

Deck.propTypes = {
  allCards: propTypes.arrayOf(Object).isRequired,
  deleteFunc: propTypes.func.isRequired,
};

export default Deck;
