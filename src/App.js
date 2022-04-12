import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      saveDeck: [],
    };
  }

  saveForm1 = () => {
    let resul = true;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    ) {
      resul = false;
    }
    return resul;
  }

  saveForm2 = () => {
    let resul = true;
    let {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    cardAttr1 = parseInt(cardAttr1, 10);
    cardAttr2 = parseInt(cardAttr2, 10);
    cardAttr3 = parseInt(cardAttr3, 10);
    const maxSum = 210;
    const maxInput = 90;
    if (
      cardAttr1 >= 0 && cardAttr1 <= maxInput
      && cardAttr2 >= 0 && cardAttr2 <= maxInput
      && cardAttr3 >= 0 && cardAttr3 <= maxInput
      && cardAttr1 + cardAttr2 + cardAttr3 <= maxSum
    ) {
      resul = false;
    }
    return resul;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
    const { saveDeck } = this.state;
    const newCards = this.state;
    delete newCards.saveDeck;
    saveDeck.push(newCards);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      saveDeck,
    });
  }

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
      saveDeck,
    } = this.state;
    const saveForm = this.saveForm1() || this.saveForm2();
    const hasTrunfo = saveDeck.some((deck) => deck.cardTrunfo === true);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ saveForm }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
