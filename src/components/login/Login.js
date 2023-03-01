import  "./Login.css"
import { useState } from "react";

const Login = ()=>{

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: handle login logic here
    };

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        // console.log(value);
    }

    return(
        <div className="login-container">

            {console.log(user)}
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
         
            
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
          
          <button type="submit">Submit</button>
          <div>or,</div>
          <button type="submit">Resister</button>

        </form>
      </div>
    )
}

export default Login