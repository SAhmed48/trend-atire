import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleOnChange = event => {
        event.preventDefault();
        const {value, name } = event.target;
        this.setState({[name]: value });
    }

    render(){

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput 
                        type='email' 
                        handleChange={this.handleOnChange}
                        value={this.state.email} 
                        name='email'
                        label='email' 
                        required />
                    <FormInput
                        handleChange={this.handleOnChange} 
                        type='password' 
                        value={this.state.password} 
                        name='password' 
                        label='password'
                        required />
                        <div className='sign-in-button'>
                            <CustomButton type='submit'> Sign in</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign in with Google {' '} </CustomButton>
                        </div>
                    
                </form>
                
            </div>
        )
    }
}



export default SignIn;