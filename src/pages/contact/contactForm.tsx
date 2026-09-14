import { useState } from "react";
import styles from "./formContactStyle.module.css"

function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false)

    async function handleSubmit( event: React.FormEvent<HTMLFormElement> ){
      event.preventDefault();

      setSending(true);
      setSent(false);
      setError(false);
      try{
         const response = await fetch(
          "/.netlify/functions/contact",
          {
            method: "POST",
            headers:{
              "Content-Tyoe" : "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              subject,
              message,
            }),
          });
         if(!response.ok){
          throw new Error("Erro ao enviar mensagem");
         }

         setSent(true);
         setName("");
         setEmail("");
         setSubject("");
      } catch(error) {
        console.error(error);
        setError(true);
      } finally {
        setSending(false);
      }
    }

    return(
      <>
        <form id={styles.contactForm} onSubmit={handleSubmit} method="POST">
          <label htmlFor="name"> Nome </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="subject">
            Assunto
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Como podemos ajudar?"
            name="subject"
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <label htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem..."
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {sent && (
            <p>Mensagem Enviada com Sucesso!</p>
          )}
          {error && (
            <p>Não foi possível enviar a mensagem.</p>
          )}
        </form>
        </>

    );
}

export default ContactForm;