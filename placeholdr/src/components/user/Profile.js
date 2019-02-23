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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.
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