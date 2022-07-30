import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { name, value, onChange, value2, onChange2, checked, onChange3 } = this.props;
    return (
      <div>
        <h2>Todas as Cartas</h2>
        <h3>Filtros de busca</h3>
        <input
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          id=""
          placeholder="Nome da carta"
          data-testid="name-filter"
        />
        <select
          name="raridade"
          value={ value2 }
          onChange={ onChange2 }
          data-testid="rare-filter"
        >
          <option value="" selected>todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            name="checkedFilter"
            checked={ checked }
            onChange={ onChange3 }
            data-testid="trunfo-filter"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
  value2: PropTypes.string,
  onChange2: PropTypes.string,
  checked: PropTypes.string,
  onChange3: PropTypes.string,
}.isRequired;

export default Filter;
