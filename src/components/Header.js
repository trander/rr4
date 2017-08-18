import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active"> Home </NavLink>
            <NavLink to="/about/trlee" className="item" activeClassName="active"> About </NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
            <NavLink to="/me" className="item" activeClassName="active">My Page</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">Log in</NavLink>
        </div>
    );
};

export default Header;