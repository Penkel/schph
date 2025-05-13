import React from 'react'
import ContactEl from './podcomponents/ContactEl'
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import PortfolioImage from './podcomponents/PortfolioImage';
import img1 from '../images/portfolio/5.jpg'
import img2 from '../images/portfolio/6.jpg'
import img3 from '../images/portfolio/8.jpg'
import img4 from '../images/portfolio/7.jpg'


const Contacts = () => {

  const copyEmail = () => {
     navigator.clipboard.writeText('sychis2002@gmail.com');
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl bold mt-2'>Социальные сети</h2>
      <ContactEl className='hover:text-gray-500 transition-all ' link={'https://vk.com/public206046436'} icon={<FaVk size={30} />} text={"Группа ВК"}/>
      <ContactEl link={'https://telegram.me/tasamayairene'} icon={<FaTelegramPlane size={30} />} text={"Телеграм"}/>
      <hr className='bg-gray-200 m-4 w-48 h-0.5'/>
        <h2 className='text-xl bold'>Электронная почта</h2>
        <div onClick={copyEmail}>
        <ContactEl link={'maito:sychis2002@gmail.com'} icon={<IoMdMail size={30} />} text={'sychis2002@gmail.com'}></ContactEl>
        </div>
      </div>
      <div className='flex flex-col px-2 text-justify'>
        <h1 className='title-main text-center'>Начнем наше приключение!</h1>
        <p className='mt-2'>Вместе мы создадим снимки, наполненные душой, передающие твою истинную красоту и эмоции. Напиши мне свои пожелания: когда тебе удобно встретиться, в каком образе хочешь фотосессию, можешь отправить референсы.</p>
        <p className='font-bold mt-2'>Жду тебя!</p>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-2 md:col-span-2 md:grid-cols-4 '>
        <PortfolioImage src={img1}/>
        <PortfolioImage src={img2}/>
        <PortfolioImage src={img3}/>
        <PortfolioImage src={img4}/>
      </div>
    </div>
  )
}

export default Contacts
