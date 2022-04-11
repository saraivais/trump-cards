import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// Iniciando projeto~

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

  xablau() {
    console.log('dhaudhs');
    return 2;
  }

  render() {
    const { Name, Description, Attr1, Attr2, Attr3, Image, Rarity, Trunfo } = this.state;
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
          onSaveButtonClick={ this.xablau }
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
