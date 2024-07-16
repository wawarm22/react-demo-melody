import React from 'react';
import { FaSearch, FaMapPin, FaUser, FaCalendarAlt } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-input-group">
                <FaMapPin className="icon" />
                <input type="text" placeholder="City, Hotel, Place to go" className="search-input"/>
            </div>
            <div className="date-input-group">
                <FaCalendarAlt className="icon" />
                <input type="date" className="date-input"/>
                <FaCalendarAlt className="icon" />
                <input type="date" className="date-input"/>
            </div>
            <div className="person-room-select">
                <FaUser className="icon" />
                <select className="person-room-input">
                    <option>1 Adult, 1 Room</option>
                    <option>2 Adults, 1 Room</option>
                    <option>More options...</option>
                </select>
            </div>
            <button type="button" className="search-button">
                <FaSearch className="search-icon"/>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
