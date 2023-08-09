import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };



    return (
        <nav>
            <div className='logo'><Link to="/">Movie.co</Link></div>
            <button className='hamburger-menu' onClick={toggleMenu}>
                <div className={`bar ${menuVisible ? 'open' : ''}`} />
                <div className={`bar ${menuVisible ? 'open' : ''}`} />
                <div className={`bar ${menuVisible ? 'open' : ''}`} />
            </button>
            <ul className={`nav__menu ${menuVisible ? 'open' : ''}`}>
                <li className='nav__links'>
                    <Link to="/" className='nav__items'>Home</Link>
                </li>
                <li className='nav__links'>
                    <Link to="/about" className='nav__items'>About Us</Link>
                </li>
                <li className='nav__links'>
                    <Link to="/movies" className='nav__items'>Movies</Link>
                </li>
                <li className='nav__links'>
                    <Link to="/contact" className='nav__items'>Contact Us</Link>
                </li>
            </ul>
            <div className={`search ${searchVisible ? 'active' : ''}`}>
                <input type='text' placeholder='Search movies...'  onChange={(e) => setSearchQuery(e.target.value)}/>
                <Link to={`/search/${searchQuery}`}>
                <AiOutlineSearch className='search-icon' onClick={toggleSearch} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
