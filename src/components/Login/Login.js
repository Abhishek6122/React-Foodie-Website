import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
    <h1 className="login_heading">Login Page</h1>
    <div className='login_page'>
      <form>
      <h1 className='formhead'>Foodie Master</h1>
        <label>Email</label>
        <input type='email' placeholder='Email' required></input>
        <label>Password</label>
        <input type='text' placeholder='Password' maxLength="6" required></input>
        <div className='rememberme'>
            <input type='checkbox'></input>Remember me
            <a href='#'>Forgot Passsword?</a>
        </div>
        <input type='submit' value="Submit"></input>
      </form>
      <div className='login_img'>
        <img src='https://wallpaperaccess.com/full/1747271.jpg'></img>
        <img src='https://wallpaperaccess.com/full/1312744.jpg'></img>
        <img src='https://wallpaperaccess.com/full/866656.jpg'></img>
      </div>
    </div>
    </>
  )
}

export default Login;