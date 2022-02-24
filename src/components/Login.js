import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
        Welcome to Login
        <Link to="/portfolio">
        Go to portfolio
        </Link>

    </div>
  )
}

export default Login;