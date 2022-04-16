import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import './style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Description: '',
      Attr1: 0,
      Attr2: 0,
      Attr3: 0,
      Image: '',
      Rarity: '',
      Trunfo: '',
      hasTrunfo: false,
      ButtonOff: true,
      createdCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  // https://javascript.plainenglish.io/react-tips-async-and-setstate-cb539ad62135#:~:text=The%20setState%20method%20is%20the,creates%20a%20pending%20state%20transaction.
  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      () => ({ [name]: value }),
      () => this.checkFormCompletion(),
    );
  }

  checkFormCompletion() {
    const maxSum = 210;
    const maxAttr = 90;
    const {
      Name,
      Description,
      Attr1,
      Attr2,
      Attr3,
      Image,
      Rarity,
    } = this.state;

    const checks = [
      !Name.length,
      !Description.length,
      !Image.length,
      !Rarity.length,
      (Attr1 > maxAttr),
      (Attr2 > maxAttr),
      (Attr3 > maxAttr),
      (Attr1 < 0),
      (Attr2 < 0),
      (Attr3 < 0),
      ((parseInt(Attr1, 10) + parseInt(Attr2, 10) + parseInt(Attr3, 10)) > maxSum),
    ];

    const result = checks.some((check) => check === true);

    this.setState({
      ButtonOff: result,
    });
    // gots ta return boolean
    // if true btn will be off
    // if false btn will be on
    // usar !every com todo mundo igual a true~
  }

  saveCard() {
    const {
      Name,
      Description,
      Attr1,
      Attr2,
      Attr3,
      Image,
      Rarity,
      Trunfo,
      createdCards,
    } = this.state;

    const newCard = {
      Name,
      Description,
      Attr1,
      Attr2,
      Attr3,
      Image,
      Rarity,
      Trunfo,
    };

    if (newCard.Trunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      createdCards: [...createdCards, newCard],
      Name: '',
      Description: '',
      Attr1: 0,
      Attr2: 0,
      Attr3: 0,
      Image: '',
      Rarity: 'normal',
      Trunfo: '',
    });
    // guardar as info em um objeto dentro de um array~
    // resetar tudo;
  }

  deleteCard(nameToFind) {
    const { createdCards } = this.state;
    const elementFound = createdCards
      .find((object) => object.Name === nameToFind);
    const newDeck = createdCards.filter((allCards) => allCards !== elementFound);
    this.setState(
      () => ({ createdCards: newDeck }),
      () => this.restoreTrunfo(),
    );
  }

  restoreTrunfo() {
    const { createdCards } = this.state;
    if (!createdCards.find((card) => card.Trunfo === true)) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const {
      Name,
      Description,
      Attr1,
      Attr2,
      Attr3,
      Image,
      Rarity,
      Trunfo,
      ButtonOff,
      hasTrunfo,
      createdCards,
    } = this.state;
    return (
      <>
        <h1 className="main-title">Tryunfo</h1>
        <div className="main">
          <div className="form-and-preview">
            <Form
              cardName={ Name }
              cardDescription={ Description }
              cardAttr1={ Attr1 }
              cardAttr2={ Attr2 }
              cardAttr3={ Attr3 }
              cardImage={ Image }
              cardRare={ Rarity }
              cardTrunfo={ Trunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ ButtonOff }
              onSaveButtonClick={ () => this.saveCard() }
            />
            <Card
              cardName={ Name }
              cardDescription={ Description }
              cardAttr1={ Attr1 }
              cardAttr2={ Attr2 }
              cardAttr3={ Attr3 }
              cardImage={ Image }
              cardRare={ Rarity }
              cardTrunfo={ Trunfo }
              isPreview
              deleteBtn={ this.deleteCard }
            />
          </div>
          <Deck deleteFunc={ this.deleteCard } allCards={ createdCards } />
        </div>
      </>
    );
  }
}

export default App;
