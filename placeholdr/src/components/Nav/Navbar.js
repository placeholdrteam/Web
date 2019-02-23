import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './Navbar.css';

class Navbar extends React.Component
{
    render() {
        return (
            <nav className="navwrap grey darken-4">
                <div className="container">
                    <Link to='/' className="left place-holder" >PlaceHoldr</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        );
    }
}

export default Navbar;