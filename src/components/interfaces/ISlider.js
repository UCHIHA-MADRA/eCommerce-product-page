import PropTypes from 'prop-types';

export const SliderPropTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

// Usage in your component:
Slider.propTypes = SliderPropTypes;
