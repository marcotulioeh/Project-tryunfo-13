import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

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
      search: '',
      searchRare: '',
      checkedFilter: '',
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
    this.setState((prevState) => ({
      saveDeck: prevState.saveDeck.filter((deck) => deck.cardName !== target.value),
    }));
  }

  searchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  searchChange2 = ({ target }) => {
    this.setState({ searchRare: target.value });
  }

  searchChange3 = ({ target }) => {
    this.setState({ checkedFilter: target.value });
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
      search,
      searchRare,
      checkedFilter,
    } = this.state;
    const saveForm = this.saveForm1() || this.saveForm2();
    const hasTrunfo = saveDeck.some((deck) => deck.cardTrunfo === true);
    const lowerSearch = search.toLowerCase();
    const searchDeck = saveDeck
      .filter((deck) => deck.cardName.toLowerCase().includes(lowerSearch));
    const selectDeck = searchDeck
      .filter((deck) => deck.cardRare.startsWith(searchRare));
    // const checkedDeck = selectDeck
    //   .filter((deck) => deck.cardTrunfo === checkedFilter);
    // console.log(checkedDeck);
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
          showcase={ false }
        />

        <Filter
          value={ search }
          onChange={ this.searchChange }
          value2={ searchRare }
          onChange2={ this.searchChange2 }
          checked={ checkedFilter }
          onChange3={ this.onInputChange }
        />

        { selectDeck.length > 0
          && selectDeck.map((deck) => (
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
