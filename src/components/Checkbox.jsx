import React from 'react';
import PropTypes from 'prop-types';

class Checbox extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ checked }
            onChange={ onChange }
            data-testid="trunfo-input"
            id="super-trunfo"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Checbox.propTypes = {
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Checbox;
