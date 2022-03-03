import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate()
    const goToPortfolio = () => {
        navigate("/portfolio")
    }
  return (
    <div>
        Welcome to Login
        <Link to="/portfolio">
        Go to portfolio
        </Link>
        <button onClick={goToPortfolio}> redirect to portfolio</button>

    </div>
  )
}

export default Login;