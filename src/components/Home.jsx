import React from "react";
import { Link, useNavigate } from "react-router-dom";
import main_photo from "../images/main.jpg";
import PortfolioImage from "./podcomponents/PortfolioImage";
import imA from '../images/portfolio/20.jpg'
import imB from '../images/portfolio/21.jpg'

const Home = () => {
  return (
    <section className=" bg-back">
      <div className=" flex flex-col-reverse md:flex-row items-center text-center justify-around p-6 ">
        <div className="w-full text-left ">
          <h2 className="text-left ">Фотограф СПб</h2>
          <h1 className="title-main">
            Твой самый чувствующий фотограф из Санкт-Петербурга!
          </h1>
          <h3 className="mt-2">Цены от 500 руб</h3>
          <p className="mt-2"><span className="font-bold">Привет! </span>Меня зовут Рира, и я профессиональный фотограф с большим опытом.</p>
          <p className="mt-2">Мечтаешь о фотосессии, которая подарит тебе незабываемые эмоции и чудесные снимки, которые ты будешь хранить до самой старости? Тогда нам с тобой по пути!</p>
          <p className="mt-2">Если хочешь узнать обо мне больше, <Link className="text-gray-700 hover:decoration-wavy underline underline-offset-2" to={'./about'}>кликай сюда</Link>, или ознакомься с моим творчеством по кнопочкам ниже!</p>

          <div className="flex gap-2 mt-4 flex-col items-center md:flex-row">
      <Link to={'./portfolio'}>
      <button className="btn-main  bg-white text-black">Ознакомиться с портфолио</button>
      </Link>
      <Link to={'./contacts'}>
      <button className="btn-main ">Написать Рире!</button>
      </Link>
      <Link to={'./prices'}>
      <button className="btn-main  bg-white text-black">Посмотреть цены</button>
      </Link>

      </div>
        </div>
          <div
        className=" 
      w-full md:w-auto overflow-hidden mb-9
      "
      >
        <div className=" md:ml-8 w-full md:h-auto h-28 overflow-hidden">
          <img
            className=" 
        w-full h-auto rounded shadow object-cover origin-top -mt-48 md:mt-0 transform scale-75 md:scale-100 max-h-screen "
            src={main_photo}
            alt="Сыч"
          />
        </div>
      </div>
      </div>

    
    <div className="grid grid-cols-2 gap-2">
      <PortfolioImage src={imA} />
      <PortfolioImage src={imB} />
    </div>
    </section>
  );
};

export default Home;
