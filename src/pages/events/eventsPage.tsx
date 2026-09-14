import styles from "./eventsStyle.module.css"

function Events() {
    return (
        <>
        <section id={styles.event}>
            <header id={styles.heroEvents}>
                <h2>Eventos</h2>
            </header>
            <section className={styles.show}>
                <img src="assets/pocket_show.png" alt="" />
                <div className={styles.showContent}>
                    <h3>Pocket Show</h3>
                    <p>A cada trimestre, nossos alunos sobem ao palco para compartilhar sua evolução em uma apresentação mais intimista e próxima do público. O Pocket Show reúne diferentes instrumentos, estilos e níveis de experiência em uma noite dedicada à música e à expressão individual. <br />
                        Mais do que uma apresentação, é uma oportunidade para colocar em prática tudo aquilo que acontece dentro da sala de aula. Cada aluno encontra seu espaço para interpretar, experimentar e dividir com outras pessoas aquilo que vem construindo ao longo de sua jornada musical.</p>
                </div>
            </section>
            <section className={styles.show}>
                <div className={styles.showContent}>
                    <h3>Show de Rock</h3>
                    <p>Duas vezes ao ano, a Sonara transforma o palco em um espaço de energia, atitude e liberdade. O Show de Rock reúne nossos alunos em apresentações inspiradas por diferentes épocas, estilos e sonoridades do gênero, criando uma experiência marcada pela força das bandas e pela presença do palco. <br />
                        Tocar em uma banda é também aprender a ouvir, acompanhar e construir junto. Por isso, cada apresentação representa o resultado de um trabalho coletivo, no qual guitarras, baixos, baterias, vocais e outros instrumentos se encontram para transformar ensaio em música.</p>
                </div>
                <img src="assets/rock_show.jpg" alt="" />
            </section>
            <section id={styles.orchestra}>
                <img src="assets/orchestra.png" alt="" />
                <div id={styles.orchestraContent}>
                    <h3>Apresentação Orquestral</h3>
                    <p>A cada semestre, diferentes instrumentos e músicos se encontram em uma grande apresentação coletiva. A Apresentação Orquestral reúne alunos e professores em uma experiência que valoriza a riqueza de diferentes timbres, a precisão do conjunto e a capacidade de cada músico contribuir para uma mesma obra. <br />
                        É também um momento para perceber a dimensão que a música pode alcançar quando diferentes trajetórias se encontram. Cada instrumento possui seu papel, cada músico acrescenta sua identidade e, juntos, eles constroem uma experiência que vai além daquilo que poderia ser realizado individualmente.</p>
                </div>
            </section>
            </section>
        </>
    );
}

export default Events;