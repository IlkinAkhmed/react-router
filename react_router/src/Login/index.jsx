import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

function Login() {
  return (
    <>
    <Link to={'/shop'} >back to home</Link>
    <form action="">
        <label htmlFor="">Username</label><br />
        <input type="text" /><br />
        <label htmlFor="">E-mail</label><br />
        <input type="text" /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" />
    </form>
    </>
  )
}

export default Login