import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/diamond.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
            <span className="logo-text">DIAMOND CLOTHING</span>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
        </div>
    </div>
)

export default Header;