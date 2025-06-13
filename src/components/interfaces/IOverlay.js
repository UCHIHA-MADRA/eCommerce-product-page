import PropTypes from 'prop-types';

export const OverlayPropTypes = {
  showSidebar: PropTypes.bool.isRequired,
  showCart: PropTypes.bool.isRequired,
  showSlider: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  setShowCart: PropTypes.func.isRequired,
  setShowSlider: PropTypes.func.isRequired,
};

// Usage in your component:
Overlay.propTypes = OverlayPropTypes;
