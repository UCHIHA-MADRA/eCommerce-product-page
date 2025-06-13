import PropTypes from 'prop-types';

export const HeaderPropTypes = {
  cartCount: PropTypes.number.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  setShowCart: PropTypes.func.isRequired,
};

// Usage in your component:
Header.propTypes = HeaderPropTypes;
