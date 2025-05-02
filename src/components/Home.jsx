import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import main_photo from '../images/main.jpg'

const Home = () => {
  return (    
    <section className='w-screen flex items-center text-center justify-around p-6 bg-yellow-200'>
      <div className='max-w-xl'>
       <h2>Фотограф СПб</h2>
        <h1 className='text-red-700'>Найми себе фотографа из Санкт-Петербурга!</h1>
        <h3>Цены от 500 руб</h3>
      <Link to='/about'>Узнать обо мне</Link>
      </div>
      <div className='ml-8'>
        <img className='max-w-md w-full h-auto rounded shadow' src={main_photo}  alt="Сыч" />
      </div>
    </section>
  )
}

export default Home