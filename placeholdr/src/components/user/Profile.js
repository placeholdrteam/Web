import React from 'react';
//import { NavLink } from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component
{
    render() {
        return (
            <div className="container profile">
                <div className="row">
                    <div className="col s6">
                        Marty Cabbage
                    </div>
                    <div className="col s6">
                        INSERT IMAGE_USER
                    </div>
                    <div className="col s4">Description</div>
                    <div className="col s10">
                        REDO
                    </div>
                    <div className="col s6">
                        INSERT_TAGS_TABLE
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;