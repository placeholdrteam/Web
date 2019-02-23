import Paginator from '../landing/Paginator';
import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component
{
    render() {
        return (
            <div  className="container">
                <Paginator />     
            </div>
        );
    }
}

export default Profile;