import React from "react";
import { Link, useNavigate } from "react-router-dom";
import main_photo from "../images/main.jpg";

const Home = () => {
  return (
    <section className=" bg-back">
      <div className="w-screen flex flex-col-reverse md:flex-row items-center text-center justify-around p-6">
        <div className="w-full text-left ">
          <h2 className="text-left ">Фотограф СПб</h2>
          <h1 className="title-main">
            Найми себе фотографа из Санкт-Петербурга!
          </h1>
          <h3 className="mt-2">Цены от 500 руб</h3>
          <Link to="/about" className="mt-2">
            Узнать обо мне
          </Link>
          <div className="mt-5 flex">
      <button className="btn-main mr-5 ">Написать сычику!</button>
      <button className="btn-main  bg-white text-black">Посмотреть цены</button>

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
        w-full h-auto rounded shadow object-cover md:translate-y-0 -translate-y-40"
            src={main_photo}
            alt="Сыч"
          />
        </div>
      </div>
      </div>

    
      
    </section>
  );
};

export default Home;
