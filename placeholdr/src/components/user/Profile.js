import React from 'react';
import './Profile.css';
import UserImage from './User_Image';


class Profile extends React.Component
{
    render() {
        return (
            <div className="container profile">
                <div className="row">
                    <div className="col s6 user-name">
                        Marty Cabbage
                    </div>
                    <div className="col s6">
                        <UserImage />
                    </div>
                    <div className="col s4">
                        Description
                    </div>
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