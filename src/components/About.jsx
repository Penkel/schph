import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sych_photo from "../images/sych.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className=" bg-back">
      
      <div className="w-screen flex flex-col md:flex-row items-center text-center justify-around p-6">
        <div
          className=" 
      w-full md:w-auto overflow-hidden mb-9
      "
        >
          <div className=" md:mr-8 w-full md:h-auto h-60 overflow-hidden">
            <img
              className=" 
        w-full h-auto rounded shadow object-cover -translate-y-48"
              src={sych_photo}
              alt="Сыч"
            />
          </div>
        </div>
        <div className="w-full text-left ">
          <h2 className="text-left ">Фотограф СПб</h2>
          <h1 className="mt-2 text-3xl text-left text-bold">
            Привет, меня зовут Ира!
          </h1>
          <p className="mt-3"> Я специализируюсь на студийной и уличной фотографии. Через свой объектив я ловлю прекрасные образы и искренние эмоции, которые хочется сохранить навсегда.</p>
          <p className="mt-3">За моей спиной опыт в 4 года. Моя цель - создавать не просто снимки, а запечатлять духовный мир человека через фотографию.</p>
          <h2 className="text-xl font-bold mt-3">Почему со мной легко?</h2>
          <p className="mt-3">Со мной на съемке можно расслабиться, шутить, предлагать свои идеи для ракурсов и поз, если хочется чего-то особенного.</p>
          <p className="mt-3">Я верю, что лучшие кажры рождаются, когда человек забывает про камеру и просто наслаждается моментом, поэтому на съемках всегда стараюсь создать уютную атмосферу.</p>
          <div className="mt-5 flex">
            <button className="btn-main mr-5 ">Написать сычику!</button>
            <button className="btn-main  bg-white text-black">
              <Link to={'/portfolio'}> 
              Ознакомиться с портфолио
              </Link>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
