import PropTypes from 'prop-types';

export const MainPropTypes = {
  cartCount: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  setCartCount: PropTypes.func.isRequired,
  setShowSlider: PropTypes.func.isRequired,
};

// Usage in your component:
Main.propTypes = MainPropTypes;
