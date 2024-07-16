import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">CA TRAVEL.</div>
            <div className="navbar-links">
                <Link to="/hotels">Hotels</Link>
                <Link to="/flights">Flights</Link>
                <Link to="/transfers">Airport Transfer</Link>
                <Link to="/rentals">Car Rental</Link>
                <Link to="/activities">Things to Do</Link>
            </div>
            <div className="navbar-actions">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Navbar;