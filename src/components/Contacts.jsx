import React from 'react'
import ContactEl from './podcomponents/ContactEl'
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className='flex flex-col items-center '>
      <ContactEl className='hover:text-gray-500 transition-all ' link={'https://vk.com/public206046436'} icon={<FaVk size={30} />} text={"Группа ВК"}/>
      <ContactEl link={'https://telegram.me/tasamayairene'} icon={<FaTelegramPlane size={30} />} text={"Телеграм"}/>
    </div>
  )
}

export default Contacts
