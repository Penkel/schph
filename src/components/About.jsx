import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className=''>
      <p className=''>About</p>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default About