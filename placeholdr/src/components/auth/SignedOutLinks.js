import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends React.Component
{
    render() {
        return (
            <ul class="right hide-on-med-and-down">
                <li><NavLink to='/'>SignUp</NavLink></li>
                <li><NavLink to='/'>About Us</NavLink></li>
            </ul>
        );
    }
}

export default SignedOutLinks;