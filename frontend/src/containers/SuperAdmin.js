import React, { Component } from 'react';
import UserTable from '../components/UserTable';

class SuperAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            roleList: []
        }
    }
    componentDidMount(){
        this.fetchUsers();
        this.fetchRoles();
    }
    fetchUsers(){
        fetch('http://159.89.188.124:8080/employees', {
            method: "GET"
        })
        .then(res => res.json())
        .then(result => this.setState({data: result}))
    }
    fetchRoles(){
        fetch('http://159.89.188.124:8080/roles', {
            method: "GET"
        })
        .then(res => res.json())
        .then(result => this.setState({roleList: result}))
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <UserTable data={this.state.data}/>
            </div>
        );
    }
}

export default SuperAdmin;