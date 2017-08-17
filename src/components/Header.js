import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="item" activeClassName="active"> Home </NavLink>
            <NavLink to="/about/trlee" className="item"> About </NavLink>
            <NavLink to="/posts" className="item">Posts</NavLink>
        </div>
    );
};

export default Header;