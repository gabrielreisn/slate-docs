import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import './login.css';


const LOGIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signinUser(input: {credentials: {email: $email, password: $password}}) {
      token
    }
  }
`;


export const LoginScreen = () => {

  const [loginRequest, { data }] = useMutation(LOGIN_MUTATION);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLoginForm = () => {
    try{
      loginRequest({ variables: {email, password} })
    }catch(e){
      console.log(e)
    }
  }

  if(data){
    // localStorage.setItem('api-token', data.signinUser.token);
    // router.push('/documens')
  }

  return(
    <div className='main-box'>  
        <section>
          <label>
            email
            <input onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            password
            <input onChange={e => setPassword(e.target.value)}/>
          </label>
          <button onClick={submitLoginForm}>Login</button>
        </section>
    </div>
  )
}

