import React, { Component } from 'react';
import PropTypes from 'prop-types';

import stylesJS from './styles';
import stylesCSS from './Button.css';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.onToggleHover = this.onToggleHover.bind(this);
  }

  onToggleHover(state) {
    this.setState({
      isHovered: state,
    });
  }

  render() {
    const { onClick, style, value } = this.props;
    const { isHovered } = this.state;
    const isHoveredStyle = isHovered ? stylesJS.hoveredView : {};

    return (
      <button
        className="view"
        onClick={onClick}
        onMouseEnter={() => this.onToggleHover(true)}
        onMouseLeave={() => this.onToggleHover(false)}
        style={{ ...stylesJS.view, ...isHoveredStyle, ...style }}
      >
        { value }
      </button>
    )
  };
};

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
  onClick: () => {},
  value: '',
  style: {},
};

export default Button;
