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
      Attr1: '',
      Attr2: '',
      Attr3: '',
      Image: '',
      Rarity: '',
      Trunfo: '',
      ButtonOff: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.checkFormCompletion = this.checkFormCompletion.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.checkFormCompletion();
  }

  sum(num1, num2, num3) {
    if ((num1 + num2 + num3) > maxSum) return true;
    return false;
  }

  range(num1, num2, num3) {
    if ((num1 > maxAttr) || (num2 > maxAttr) || (num3 > maxAttr)) return true;
    return false;
  }

  verifyAttributes(num1, num2, num3) {
    if (this.sum(num1, num2, num3) === true
    && this.range(num1, num2, num3) === true) return true;
    return false;
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

    const fields = [
      !Name.length,
      !Description.length,
      !Image.length,
      !Rarity.length,
      this.verifyAttributes(Attr1, Attr2, Attr3),
    ];

    const result = !fields.every((field) => field === false);
    this.setState({
      ButtonOff: result,
    });
    // gots ta return boolean
    // if true btn will be off
    // if false btn will be on
    // usar !every com todo mundo igual a true~
  }

  xablau() {
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
          onSaveButtonClick={ this.xablau() }
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
