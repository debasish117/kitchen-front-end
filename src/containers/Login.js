import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import Items from '../components/Items/Items';
import { connect } from 'react-redux'
import * as LoginActions from '../action/login';
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
        password: '',
        redirect: false
    }

    handleSubmit = (event) => {

        // let _this = this;
        // axios.post('http://localhost:3000/authenticate', {
        //     email: this.state.email,
        //     password: this.state.password
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //     _this.setState({redirect: true})
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        // });
        // event.preventDefault();
        event.preventDefault();
        this.props.loginRequest({
            email: this.state.email,
            password: this.state.password
        })
        
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
        let {awaitingTransition, redirect} = this.props;
        if (redirect){
            return <Redirect to="/items" />
        }else{
            return (
                <div className="Login">
                    <form >
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
                            onClick = {this.handleSubmit.bind(this)}
                            >
                          {awaitingTransition ? 'Loging...' : 'Login' }  
                        </Button>
                    </form>
                </div>
            );
        }
    }
}

const mapStateToProps = state =>{
    return {
        awaitingTransition: state.ui.login.awaitingTransition,
        redirect: state.ui.login.redirect
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);