import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// Iniciando projeto~
const maxSum = 210;
const maxAttr = 90;

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
      ButtonOff: true,
      createdCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.checkFormCompletion = this.checkFormCompletion.bind(this);
    this.xablau = this.xablau.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      () => ({ [name]: value }),
      () => this.checkFormCompletion(),
    );
  }

  checkFormCompletion() {
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
    console.log(checks);
    console.log(result);

    this.setState({
      ButtonOff: result,
    });
    // gots ta return boolean
    // if true btn will be off
    // if false btn will be on
    // usar !every com todo mundo igual a true~
  }

  xablau() {
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ Name }
          cardDescription={ Description }
          cardAttr1={ Attr1 }
          cardAttr2={ Attr2 }
          cardAttr3={ Attr3 }
          cardImage={ Image }
          cardRare={ Rarity }
          cardTrunfo={ Trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ ButtonOff }
          onSaveButtonClick={ () => this.xablau() }
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
        />
      </div>
    );
  }
}

export default App;
