import React from 'react'
import ReactDom from 'react-dom'
import './index.css';
import Clock from './tick.js';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' ' + this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 
                    Name:
                <input type='text' name='name' onChange={this.handleChange} placeholder='Name' />
                </label>
                <label>
                    Password:
            <input type='password' name='password' onChange={this.handleChange} placeholder='Password' />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

function App() {
    return (
        <div>
            <Clock />
            <h3>Login</h3>
            <User />
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')

);
