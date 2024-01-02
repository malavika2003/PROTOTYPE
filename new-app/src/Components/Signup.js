import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-form'>
      <h>Sign Up</h>
      <form>
        <label>Username</label>
        <input type="text"></input>
        <label>Create Password</label>
        <input type="password"></input>
        <label>Re-enter Password</label>
        <input type="password"></input>
        <label>Select age</label>
          <select>
            <option>15-25</option>
            <option>25-40</option>
            <option>above 40</option>
          </select>
        <label>Select Category</label>
        <select>
          <option>Addicted</option>
          <option>Normal user</option>
        </select>
        <p>Already have an account then <Link to="/login">Login</Link></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup