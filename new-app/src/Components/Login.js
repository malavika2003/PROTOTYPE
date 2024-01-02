import React from 'react'

const Login = ({disp,setDisp}) => {
  return (
    <div className='login-form'>
         <h>Log In</h>
         <form onSubmit={()=>setDisp(!disp)}>
             <label>Username</label>
             <input type="text"></input>
             <label>Password</label>
             <input type="password"></input>
             <button type="submit">Login</button>
         </form>
    </div>
  )
}

export default Login