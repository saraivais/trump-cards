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
      rarityFilter: '',
      TrunfoFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { allCards, deleteFunc } = this.props;
    const { nameFilter, rarityFilter, TrunfoFilter } = this.state;

    return (
      <div>
        <div className="my-filters">
          <h1>Filtros</h1>
          <FilterInput
            disabled={ TrunfoFilter }
            inputValue={ nameFilter }
            inputName="nameFilter"
            placeHolder="Nome da Carta"
            testId="name-filter"
            changeFunc={ this.onInputChange }
          />
          <label htmlFor="rarityFilter">
            <select
              disabled={ TrunfoFilter }
              data-testid="rare-filter"
              name="rarityFilter"
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="TrunfoFilter">
            Super Trunfo
            <input
              type="checkbox"
              name="TrunfoFilter"
              data-testid="trunfo-filter"
              onChange={ this.onInputChange }
            />
          </label>
        </div>
        <div className="my-deck">
          {
            allCards
              .filter((card) => {
                if (rarityFilter === 'todas' || rarityFilter === ''
                || TrunfoFilter === true) { return card; }
                return card.Rarity === rarityFilter;
              })
              .filter((cardi) => {
                if (TrunfoFilter === true) return cardi;
                return cardi.Name.includes(nameFilter);
              }) // trunfoflter !== false~
              .filter((cardie) => {
                if (TrunfoFilter) {
                  return cardie.Trunfo === true;
                }
                return cardie;
              })
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
