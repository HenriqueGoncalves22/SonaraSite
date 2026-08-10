import { useState } from 'react'
import './homeStyle.css'

function Home() {
  return (
    <>
      <header>
        <nav className='navbar'>
          <img src="../../public/assets/logo.png" />
          <ul>
            <li><a href='../courses/coursesPage.tsx'>Cursos</a></li>
            <li><a href='../events/eventsPage.tsx'>Eventos</a></li>
            <li><a href='../contact/contactPage.tsx'>Contato</a></li>
            <li><a href='../history/historyPage.tsx'>Quem Somos</a></li>
          </ul>
        </nav>

        <section id='banner'>
          <h1><span>Sinta</span> a Música</h1>
          <h3> Muito além da técnica. <br />Encontre a sua frequência.</h3>
        </section>
      </header>
      <body>
        <section id='hero'>
          <img src="../../public/assets/sonara-hero.png" alt="" />
          <div>
            <h2>Nossa Inspiração</h2>
            <p> A <b>Sonara</b> nasceu com o propósito de tornar o ensino da música acessível, inspirador e transformador. Mais do que formar músicos, desenvolvemos pessoas por meio de uma metodologia que une técnica, criatividade e prática constante. Nosso compromisso é oferecer um ensino de excelência, conduzido por profissionais qualificados em um ambiente acolhedor, onde cada aluno encontra segurança para evoluir, descobrir seu potencial e construir sua própria identidade musical. </p>
            <button>Saiba Mais</button>
          </div>
        </section>
        <section id='courses'>
          <h2>Nossos Cursos</h2>
          <div id='cardsGroup'>
            <img className='card' src="./../../public/assets/violino.jpg" alt="" />
            <img className='card' src="./../../public/assets/piano.jpg" alt="" />
            <img className='card' src="./../../public/assets/teoriamusical.jpg" alt="" />
            <img className='card' src="./../../public/assets/guitarra.png" alt="" />
          </div>
          <div id='cardsGroup'>
            <img className='card' src="./../../public/assets/violão" alt="" />
            <img className='card' src="./../../public/assets/canto" alt="" />
            <img className='card' src="./../../public/assets/sax" alt="" />
            <img className='card' src="./../../public/assets/bateria" alt="" />
          </div>
        </section>
        <section id='methodology'>
          <h2>Metodologia</h2>
          <img src="" alt="" />
          <p>Na Sonara, o aprendizado musical acontece por meio da integração entre técnica, prática e expressão artística. Nossa metodologia combina fundamentos musicais, aplicação prática desde as primeiras aulas e desenvolvimento individual, permitindo que cada aluno evolua no seu próprio estilo e objetivo.</p>
          <p>Seja em Produção Musical, Música Pop ou Música Clássica, o ensino é orientado por experiências reais, acompanhamento próximo e construção gradual da autonomia musical.</p>
        </section>
        <section id='presentation'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </body>
      <footer>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>Guarulhos - SP</li>
            <li>📞(11)99999-9999</li>
            <li>✉️contato@sonara.com</li>
            <li>Atendimento Segunda a Sexta | 08:00 - 17:00</li>
          </ul>
        </div>
        <div>
          <h4>Cursos</h4>
          <ul>
            <li>Clássicos</li>
            <li>Popular</li>
          </ul>
        </div>
        <div>
          <h4>Institucional</h4>
          <ul>
            <li><a href="">Quem Somos</a></li>
            <li><a href="">Eventos</a></li>
            <li><a href="">Trabalhe Conosco</a></li>
          </ul>
        </div>
        <div>
          <h4>Redes Sociais</h4>

        </div>
        <p>©Todos Direitos Reservados por Sonara </p>
      </footer>

    </>
  );
}

export default Home
