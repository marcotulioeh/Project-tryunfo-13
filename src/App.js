import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
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
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((prevState) => ({
      saveDeck: [...prevState.saveDeck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  }

  deletDeck = ({ target }) => {
    console.log(target.value);
    this.setState((prevState) => ({
      saveDeck: prevState.saveDeck.filter((deck) => deck.cardName !== target.value),
    }));
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
          saveDeck={ saveDeck }
          // deletDeck={ this.deletDeck }
          showcase={ false }
        />
        { saveDeck.length > 0
          && saveDeck.map((deck) => (
            <Card
              key={ deck.cardName }
              cardName={ deck.cardName }
              cardDescription={ deck.cardDescription }
              cardAttr1={ deck.cardAttr1 }
              cardAttr2={ deck.cardAttr2 }
              cardAttr3={ deck.cardAttr3 }
              cardImage={ deck.cardImage }
              cardRare={ deck.cardRare }
              cardTrunfo={ deck.cardTrunfo }
              deleteCard={ this.deleteCard }
              deletDeck={ this.deletDeck }
              showcase
            />))}
      </div>
    );
  }
}

export default App;
