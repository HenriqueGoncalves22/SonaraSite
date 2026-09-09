import styles from "./aboutStyle.module.css";

function AboutPage() {

  return (
    <>
    <section id={styles.about}>

      {/* HISTÓRIA */}

      <section id={styles.history}>

        <div id={styles.historyImage}>
          <img
            src="/assets/sonara.jpg"
            alt="Espaço Sonara"
          />
        </div>

        <div id={styles.historyText}>

          <h2>Nossa História</h2>

          <p>
            A Sonara nasceu com o propósito de criar um espaço onde
            aprender música fosse uma experiência acessível, criativa
            e significativa.
          </p>

          <p>
            Mais do que ensinar instrumentos, buscamos desenvolver
            músicos capazes de compreender, interpretar e criar
            música de diferentes formas.
          </p>

          <p>
            Nossa proposta combina conhecimento técnico, prática
            musical e liberdade artística, respeitando o ritmo e os
            objetivos de cada aluno.
          </p>

        </div>

      </section>


      {/* PROPOSTA */}

      <section id={styles.proposal}>

        <h2>Nossa Proposta</h2>

        <p>
          Acreditamos que o aprendizado musical vai além de aprender
          a tocar um instrumento.
        </p>


        <div id={styles.proposalCards}>

          <article>
            <span>🎵</span>
            <h3>Aprender</h3>

            <p>
              Desenvolver fundamentos musicais, técnicas e
              conhecimentos que formam uma base sólida.
            </p>
          </article>


          <article>
            <span>🎓</span>
            <h3>Desenvolver</h3>

            <p>
              Trabalhar percepção, criatividade, coordenação,
              interpretação e expressão musical.
            </p>
          </article>


          <article>
            <span>🎧</span>
            <h3>Criar</h3>

            <p>
              Estimular o aluno a experimentar, improvisar,
              compor e desenvolver sua própria identidade.
            </p>
          </article>

        </div>

      </section>


      {/* MISSÃO */}

      <section id={styles.mission}>

        <h2>Nossa Missão</h2>

        <p>
          Tornar o ensino musical uma experiência acessível,
          estimulante e capaz de acompanhar cada aluno em sua
          própria jornada musical.
        </p>

      </section>


      {/* VISÃO */}

      <section id={styles.future}>

        <div>

          <h2>Onde Queremos Chegar</h2>

          <p>
            Queremos construir uma comunidade musical onde alunos,
            professores e artistas possam compartilhar conhecimento,
            experiências e criatividade.
          </p>

          <p>
            A Sonara busca crescer sem perder aquilo que consideramos
            essencial: proximidade, qualidade de ensino e espaço
            para que cada pessoa encontre sua própria maneira de
            fazer música.
          </p>

        </div>

        <img
          src="/assets/sonara2.jpg"
          alt="Alunos estudando música"
        />

      </section>

    </section>
    </>
  );}

export default AboutPage;