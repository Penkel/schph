import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sych_photo from "../images/sych.jpg";
import PortfolioImage from "./podcomponents/PortfolioImage";
import i1 from "../images/portfolio/15.jpg";
import i2 from "../images/portfolio/16.jpg";
import i3 from "../images/portfolio/17.jpg";
import i4 from "../images/portfolio/18.jpg";
import i5 from "../images/portfolio/19.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className=" bg-back">
      <div className="w-screen flex flex-col md:flex-row items-center text-center justify-around p-6 ">
        <div
          className=" 
      w-full md:w-auto overflow-hidden mb-9 flex items-center justify-center
      "
        >
          <div className=" md:mr-8 w-full md:h-auto h-60 overflow-hidden flex justify-center items-center">
            <img
              className=" 
        w-full h-auto rounded shadow object-cover -translate-y-28"
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
          <p className="mt-3">
            {" "}
            Я специализируюсь на студийной и уличной фотографии. Через свой
            объектив я ловлю прекрасные образы и искренние эмоции, которые
            хочется сохранить навсегда.
          </p>
          <p className="mt-3">
            За моей спиной опыт в 4 года. Моя цель - создавать не просто снимки,
            а запечатлять духовный мир человека через фотографию.
          </p>
          <h2 className="text-xl font-bold mt-3">Почему со мной легко?</h2>
          <p className="mt-3">
            Со мной на съемке можно расслабиться, шутить, предлагать свои идеи
            для ракурсов и поз, если хочется чего-то особенного.
          </p>
          <p className="mt-3">
            Я верю, что лучшие кажры рождаются, когда человек забывает про
            камеру и просто наслаждается моментом, поэтому на съемках всегда
            стараюсь создать уютную атмосферу.
          </p>
          <h2 className="text-xl font-bold mt-3">Что я люблю кушать?</h2>
          <p>
            Я люблю орешки, особенно спортивная смесь и фисташки! Мне ещё
            нравятся орешки, у которых сгущенка внутри.
          </p>
          <p>
            Ещё мне нравятся чипсы, но я не люблю в этом признаваться. Мне
            обычно грустно после чипсов, эх...
          </p>
          <div className="mt-5 flex">
            <Link to={"/contacts"}>
              <button
                onClick={() => window.scrollTo({ top: 0 })}
                className="btn-main mr-5 "
              >
                Написать Рире!
              </button>
            </Link>
            <Link to={"/portfolio"}>
              <button
                onClick={() => window.scrollTo({ top: 0 })}
                className="btn-main  bg-white text-black"
              >
                Ознакомиться с портфолио
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <PortfolioImage src={i5} className="" />
        <PortfolioImage src={i3} />
        <PortfolioImage src={i2} />
        <PortfolioImage className="row-span-2" src={i4} />
        <PortfolioImage src={i1} />
      </div>
    </section>
  );
};

export default About;
