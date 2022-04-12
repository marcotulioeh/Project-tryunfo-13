import React from 'react';
import PropTypes from 'prop-types';
// import MyInput from './MyInput';
// import MyTextarea from './MyTextarea';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handlerChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
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
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange,
    } = this.props;

    return (

      <form action="">
        <label htmlFor="cardName">
          Nome:
          <input
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            id="cardName"
            required
          />
        </label>

        <br />
        <br />

        <fieldset>
          <legend>Descrição:</legend>
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            required
          />
        </fieldset>

        <br />
        <br />

        <label htmlFor="cardAttr1">
          Attr01:
          <input
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="cardAttr1"
          />
        </label>

        <br />
        <br />

        <label htmlFor="cardAttr2">
          Attr02:
          <input
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="cardAttr2"
          />
        </label>

        <br />
        <br />

        <label htmlFor="cardAttr3">
          Attr03:
          <input
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="cardAttr3"
          />
        </label>

        <br />
        <br />

        <label htmlFor="cardImage">
          Imagem:
          <input
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="cardImage"
            required
          />
        </label>

        <br />
        <br />

        <label htmlFor="cardRare">
          Raridade:
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="cardRare"
            required
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <br />
        <br />

        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            id="cardTrunfo"
          />
        </label>

        <br />
        <br />

        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
