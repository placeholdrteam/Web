import React from 'react';
//import { NavLink } from 'react-router-dom';
import './Profile.css';

/// Get Image from FIREBASE

class UserImage extends React.Component
{
    render() {
        return (
            <div class="image-container">
                <img class="image" src="https://picsum.photos/200/300/?random" alt="User"/>
            </div>
        );
    }
}

export default UserImage;