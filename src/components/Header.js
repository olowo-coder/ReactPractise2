import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const { branding } = props;
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="navbar-brand">
                                Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}


Header.defaultProps = {
    branding: 'My App'
};

Header.protoTypes ={
    branding: PropTypes.string.isRequired
};

export default Header;