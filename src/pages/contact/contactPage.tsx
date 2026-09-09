import styles from "./contactStyle.module.css";

function Contact() {

  return (
    <section id={styles.contact}>

      {/* HERO */}

      <header id={styles.contactHero}>

        <h1>Entre em Contato</h1>

        <p>
          Tem alguma dúvida sobre nossos cursos?
          Fale com a Sonara.
        </p>

      </header>


      {/* CONTEÚDO */}

      <div id={styles.contactContent}>


        {/* FORMULÁRIO */}

        <form id={styles.contactForm}>

          <h2>Envie uma mensagem</h2>


          <label htmlFor="name">
            Nome
          </label>

          <input
            id="name"
            type="text"
            placeholder="Seu nome"
          />


          <label htmlFor="email">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
          />


          <label htmlFor="subject">
            Assunto
          </label>

          <input
            id="subject"
            type="text"
            placeholder="Como podemos ajudar?"
          />


          <label htmlFor="message">
            Mensagem
          </label>

          <textarea
            id="message"
            placeholder="Digite sua mensagem..."
          />


          <button type="submit">
            Enviar Mensagem
          </button>

        </form>


        {/* INFORMAÇÕES */}

        <div id={styles.contactInfo}>

          <h2>Fale Conosco</h2>


          <div className={styles.infoItem}>

            <span>📍</span>

            <div>
              <h3>Endereço</h3>

              <p>
                Rua Exemplo, 123
                <br />
                São Paulo - SP
              </p>
            </div>

          </div>


          <div className={styles.infoItem}>

            <span>📞</span>

            <div>
              <h3>Telefone</h3>

              <p>
                (11) 00000-0000
              </p>
            </div>

          </div>


          <div className={styles.infoItem}>

            <span>✉️</span>

            <div>
              <h3>E-mail</h3>

              <p>
                contato@sonara.com
              </p>
            </div>

          </div>


          <div className={styles.infoItem}>

            <span>🕐</span>

            <div>
              <h3>Horário de Atendimento</h3>

              <p>
                Segunda a sexta
                <br />
                09:00 às 20:00
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* MAPA */}

      <section id={styles.mapSection}>

        <h2>Onde Estamos</h2>

        <div id={styles.map}>
          <p>
            Mapa do Google Maps
          </p>
        </div>

      </section>


      {/* REDES */}

      <section id={styles.social}>

        <h2>Continue acompanhando a Sonara</h2>

        <p>
          Acompanhe novidades, eventos e conteúdos
          relacionados ao mundo da música.
        </p>

        <div id={styles.socialLinks}>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            YouTube
          </a>

          <a href="#">
            Facebook
          </a>

        </div>

      </section>

    </section>
  );
}

export default Contact;