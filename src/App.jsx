import "./App.css";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import perfilImage from "./assets/perfilImage.jpeg";

function App() {
  const [isMenuClick, setIsMenuClick] = useState(false);
  return (
    <>
      <header className="h-10 w-full flex justify-between px-20">
        <div className="logo">
          <h2 className="font-bold text-3xl font-mono text-white">
            Anderson Dev
          </h2>
        </div>
        <nav className="flex gap-6 items-center">
          <a className="text-gray-300 text-lg hidden lg:block" href="#home">
            Home
          </a>
          <a className="text-gray-300 text-lg hidden lg:block" href="#about">
            About
          </a>
          <a
            className="text-gray-300 text-lg hidden lg:block"
            href="https://www.salesforce.com/trailblazer/carvalhodev"
          >
            Trailhead
          </a>
          <RiMenu3Fill
            onClick={() => {
              setIsMenuClick(true);
            }}
            className="cursor-pointer text-gray-300 text-3xl"
          />
        </nav>
        {isMenuClick ? (
          <IoCloseSharp
            onClick={() => {
              setIsMenuClick(false);
            }}
          />
        ) : null}
      </header>
      <main className="flex justify-center items-center gap-8 xl:gap-32 flex-wrap mt-28 px-6">
        <section className="flex flex-col 2xl:w-[600px] items-center lg:w-[1024px] md:w-full xl:w-[580px]">
          <div>
            <h1 className="font-bold text-6xl font-mono text-white text-left m-h">
              Nice to meet you,<br></br>I'm Anderson Carvalho
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              Sou um entusiasta em tecnologia com uma paixão por computadores
              que começou desde os 3 anos de idade, influenciado pelo meu pai,
              que tinha uma lan house. Desde cedo, desenvolvi uma curiosidade e
              um amor profundo por tecnologia. Tenho experiência em
              desenvolvimento front-end, participando do projeto da Justiça
              Federal da Paraíba pela Fábrica de Software Unipê, onde refinei
              minhas habilidades em criar interfaces de usuário envolventes e
              eficientes.
            </p>
          </div>
          <div className="flex justify-start w-[100%] gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/anderson-carvalho-a34968254/"
              target="_blank"
            >
              <FaLinkedin className="text-white text-4xl" />
            </a>
            <a
              href="https://www.salesforce.com/trailblazer/carvalhodev"
              target="_blank"
            >
              <FaSalesforce className="text-white text-4xl" />
            </a>
            <a href="https://github.com/AndersonCarvalhoo" target="_blank">
              <FaGithub className="text-white text-4xl" />
            </a>
          </div>
        </section>
        <picture className="2xl:w-[600px] flex justify-center md:w-[500px] lg:w-[600px] xl:w-[500px] w-[400px] ">
          <img src={perfilImage} alt="" className="rounded-full" />
        </picture>
      </main>
    </>
  );
}

export default App;
