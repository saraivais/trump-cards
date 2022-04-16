import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import '../style/Deck.css';

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
          <h1 className="filters-title">Filtros</h1>
          <label className="filter-labels" htmlFor="nameFilter">
            <input
              className="filter-inputs"
              value={ nameFilter }
              type="text"
              name="nameFilter"
              placeholder="Nome da Carta"
              data-testid="name-filter"
              onChange={ this.onInputChange }
            />
          </label>
          <label className="filter-labels" htmlFor="rarityFilter">
            <select
              className="filter-inputs"
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
          <label className="filter-labels" htmlFor="TrunfoFilter">
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
              })
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
