
import React, { useState } from 'react';
import './resister.css';
import { userResister } from '../../service/api';

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
       
    })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, password, } = user;
    if(name && email && password ){
        await userResister(user)
        alert("posted")

        
    }
    else{
        alert("invalid inforamtion")
    }
    
  };

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })}

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form >

            {console.log(user) }
       
       
          <input
            type="text"
            placeholder='name'
            name='name'
            value={user.name}
            onChange={handleChange}
           
          />
        
        
        
          <input
            type="email"
            placeholder='enter email'
            name='email'

            value={user.email}
            onChange={handleChange}
           
          />
      
        
        
          <input
            type="password"
            name='password'
            placeholder='enter password'

            value={user.password}
            onChange={handleChange}
          
          />
        
         
          {/* <input
            type="reEnterPassword"
            placeholder='Re-enter password'
            name='reEnterPassword'

            value={user.reEnterPassword}
            onChange={handleChange}
           
          />
         */}
        <button type="submit" onClick={handleSubmit}>Resister</button>
        <div>or,</div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Register;
// this is the resister page in the world history and so on of the 




// wwat should i do thene 