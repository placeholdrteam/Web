import React from 'react';


class SignUp extends React.Component
{
        state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
        handleChange = (e) => {
            console.log(e);
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12 grey-2">
                        <div className="row">
                            <div class="input-field col s6">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div class="input-field col s12">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} className="validate"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="password">Password: </label>
                                <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-field">
                                <button className="btn grey-1 lighten-1">SignUp</button>
                        </div> 
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;