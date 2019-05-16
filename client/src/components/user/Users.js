import React from 'react';
import axios from 'axios';
import Auth from '../auth/auth';
import User from './User';
import '../../App.css'

class Users extends React.Component {
    state = {
        users: [],
    }

    render(){
        return(
            <div className="user-cards">
                <h2>List of users</h2>
                <ul>
                    {this.state.users.map((user, id) => {
                       return <User key={id} user={user}/>
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        const api = localStorage.getItem('dep');
        axios.get(`/users/${api}`)
        .then(res => {
            this.setState({ users: res.data})
        })
    }
}

export default Auth(Users);