import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './Login.css';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        axios.post('http://localhost:3000/authenticate', {
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            // redirect according to status code
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.type]: event.target.value
        });
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render () {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup id="email" size="large">
                        <FormLabel checked>Email</FormLabel>
                        <input name='email' autoFocus type="email" value={this.state.email} onChange={this.handleChange}></input>
                    </FormGroup>
                    <FormGroup id="password" size="large">
                        <FormLabel>Password</FormLabel>
                        <input name='password' value={this.state.password} onChange={this.handleChange} type="password"></input>
                    </FormGroup>
                    <Button variant="raised" style={styles.button}
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick = {this.handleSubmit}
                        >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;