import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormContactEmail() {
  const [nameInputForm, setNameInputForm] = useState("");
  const [emailInputForm, setEmailInputForm] = useState("");
  const [messageInputForm, setMessageInputForm] = useState("");

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
    <section
      className="flex justify-center items-center gap-8 xl:gap-32 flex-wrap px-6 my-20"
      id="contact"
    >
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
  );
}
