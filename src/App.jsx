import "./App.css";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import perfilImage from "./assets/perfilImage.jpeg";

import emailjs from "@emailjs/browser";

function App() {
  const [nameInputForm, setNameInputForm] = useState("");
  const [emailInputForm, setEmailInputForm] = useState("");
  const [messageInputForm, setMessageInputForm] = useState("");
  const [isMenuClick, setIsMenuClick] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: nameInputForm,
      message: messageInputForm,
      email: emailInputForm,
    };
    emailjs
      .send(
        "service_pvwk6iq",
        "template_l14aolt",
        templateParams,
        "9s7VcliTuoMiLv-Qc"
      )
      .then(
        (response) => {
          alert("Email enviado", response.status, response.text);
          clearInputForm();
        },
        (err) => {
          alert("o Email não foi enviado", err);
          clearInputForm();
        }
      );
  }

  function clearInputForm() {
    setNameInputForm("");
    setEmailInputForm("");
    setMessageInputForm("");
  }

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
            target="_blank"
          >
            Trailhead
          </a>
          <RiMenu3Fill
            onClick={() => {
              setIsMenuClick(true);
            }}
            className="cursor-pointer text-gray-300 text-3xl md:hidden"
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
      <section className="flex justify-center items-center gap-8 xl:gap-32 flex-wrap px-6 my-20">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-3 w-full lg:w-[600px]"
        >
          <h2 className="text-4xl font-bold dark:text-white">Contato</h2>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu nome"
            onChange={(event) => {
              setNameInputForm(event.target.value);
            }}
            value={nameInputForm}
            required
          />
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu email"
            onChange={(event) => {
              setEmailInputForm(event.target.value);
            }}
            value={emailInputForm}
            required
          />
          <textarea
            name=""
            id=""
            maxLength={300}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite sua mensagem..."
            rows={6}
            onChange={(event) => {
              setMessageInputForm(event.target.value);
            }}
            value={messageInputForm}
            required
          ></textarea>
          <button className="bg-sky-950 rounded-md p-1 text-white text-lg">
            Enviar email
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
