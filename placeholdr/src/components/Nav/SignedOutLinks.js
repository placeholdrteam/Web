import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends React.Component
{
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/auth/signin'>SignIn</NavLink></li>
                <li><NavLink to='/auth/signup'>SignUp</NavLink></li>
                <li><NavLink to='/'>About Us</NavLink></li>
            </ul>
        );
    }
}

export default SignedOutLinks;