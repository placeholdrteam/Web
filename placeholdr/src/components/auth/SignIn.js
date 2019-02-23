import React from 'react';  


class SignIn extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            email   : '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="grey-2">
                    <h5 className="text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn grey-1 lighten-1">LogIn</button>
                    </div> 
                </form>
            </div>
        );
    }
}

export default SignIn;