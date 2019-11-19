import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            loginResult: {},
            submitted: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value})
    }

    loginRequest(){
        fetch('http://159.89.188.124:8080/employees/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        }) 
        .then(res => res.json())
        .then(result => this.setState({loginResult: result, submitted: true}))
        .catch(err => this.setState({loginResult: err, submitted: true}))
    }

    render() {
        console.log(this.state)
        if(this.state.loginResult.status === 500 && this.state.submitted === true){
            this.setState({email: "", password: ""})
            console.log("Failed to Login")
        }
        else if(this.state.loginResult.email !== "" && this.state.submitted === true){
            console.log("Success")
        }
        return (
            <div>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    margin="normal"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <Button disabled={this.state.email === "" || this.state.password === ""}
                        variant="contained"
                        color="primary"
                        onClick={() => this.loginRequest()}
                    >
                    Login
                </Button>
            </div>
        );
    }
}

export default Login;