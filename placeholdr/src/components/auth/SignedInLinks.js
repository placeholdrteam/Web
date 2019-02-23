import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends React.Component
{
    render() {
        return (
            <ul className="right">
                <li><NavLink to='/'>Listings</NavLink></li>
                <li><NavLink to='/profile/p_init'>Add Listing</NavLink></li>
                <li><NavLink to='/'>Logout</NavLink></li>
                <li><NavLink to='/profile' className="btn btn-floating grey-1 lighten-1">U</NavLink></li>
            </ul>
        );
    }
}

export default SignedInLinks;