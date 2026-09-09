import { useState } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './homeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
        <section id="banner">
          <h1><span>Sinta</span> a Música</h1>
          <h3> Muito além da técnica. <br />Encontre a sua frequência.</h3>
        </section>
        <section ></section>
        <section id='hero'>
          <img src="../../public/assets/sonara-hero.png" alt="" />
          <div>
            <h2>Nossa Inspiração</h2>
            <p> A Sonara nasceu com o propósito de tornar o ensino da música acessível, inspirador e transformador. Mais do que formar músicos, desenvolvemos pessoas por meio de uma metodologia que une técnica, criatividade e prática constante. Nosso compromisso é oferecer um ensino de excelência, conduzido por profissionais qualificados em um ambiente acolhedor, onde cada aluno encontra segurança para evoluir, descobrir seu potencial e construir sua própria identidade musical. </p>
            <button>Saiba Mais</button>
          </div>
        </section>
        <section id='courses'>
          <h2>Nossos Cursos</h2>
          <div id='cardsGroup'>
            <div className='card'>
              <a href="/cursos/violino">
                <h3>Violino</h3>
                <img src="assets/violino.jpg" alt="" />
              </a>
            </div>
            <div className='card'>
              <a href="/cursos/piano">
                <h3>Piano</h3>
                <img src="assets/piano.jpg" alt="" />
              </a>
            </div>
             <div className='card'>
              <a href="/cursos/sax">
                <h3>Sax</h3>
                <img src="assets/sax.jpg" alt="" />
              </a>
            </div>
          </div>
          <div id='cardsGroup'>
            <div className='card'>
              <a href="/cursos/violao">
                <h3> Violão</h3>
                <img src="assets/violao.jpg" alt="" />
              </a>
            </div>
            <div className='card'>
              <a href="/cursos/canto">
                <h3>Canto</h3>
                <img src="assets/canto.jpg" alt="" />
              </a>
            </div>
            <div className='card'>
              <a href="/cursos/guitarra">
                <h3>Guitarra</h3>
                <img src="assets/guitarra.png" alt="" />
              </a>
            </div>
          </div>
          <button><Link to="/cursos">Explorar Cursos</Link></button>
        </section>
        <section id='methodology'>
          <img src="/assets/methodology.png" alt="" />
          <div>
            <h2>Metodologia</h2>
            <p>Na Sonara, o aprendizado musical acontece por meio da integração entre técnica, prática e expressão artística. Nossa metodologia combina fundamentos musicais, aplicação prática desde as primeiras aulas e desenvolvimento individual, permitindo que cada aluno evolua no seu próprio estilo e objetivo.</p>
            <div style={{ display: 'flex' }}>
              <div className='cardMethodology'>
                <h5><i className="bi bi-music-note-beamed" /> Aulas Personalizadas</h5>
                <p>Conteúdo adaptado ao nível, ritmo e objetivos de cada estudante.</p>
              </div>
              <div className='cardMethodology'>
                <h5><FontAwesomeIcon icon={faGuitar} />Prática desde o início</h5>
                <p>Teoria aplicada em exercícios, repertório e experiências musicais reais.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='presentation'>
          <h2>Apresentações</h2>
          <div id='presentationGrid'>
            <div id='topImages'>
              <img src="./../../public/assets/presentation1.png" alt="" id='image1' />
              <img src="./../../public/assets/presentation2.png" alt="" id='image2' />
            </div>
            <img src="./../../public/assets/presentation3.png" alt="" id='image3' />
            <div id='bottomImages'>
              <img src="./../../public/assets/presentation4.png" alt="" id='image4' />
              <img src="./../../public/assets/presentation5.png" alt="" id='image5' />
            </div>
          </div>
        </section>
    </>
  );
}

export default Home;
