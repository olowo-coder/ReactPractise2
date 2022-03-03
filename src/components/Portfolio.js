import React from 'react'
import  { useNavigate } from 'react-router-dom'
function Portfolio() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
  return (
    <div> Welcome to Portfolio <button onClick={goBack}>Go back</button></div>
  )
}

export default Portfolio;