import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./login.css"

import React from 'react'

export default function Login() {
  return (
    <div className="login">
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter ur Email...."/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter ur password"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
