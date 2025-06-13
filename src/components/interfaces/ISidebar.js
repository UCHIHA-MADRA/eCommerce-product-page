import PropTypes from 'prop-types';

export const SidebarPropTypes = {
  setShowSidebar: PropTypes.func.isRequired,
};

// Usage in your component:
Sidebar.propTypes = SidebarPropTypes;
