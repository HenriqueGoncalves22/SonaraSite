interface Course{
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    classification: string;
    duration: string;
    quantity: string;
    type: string;
    teacherId: number[];
}

export const courses: Course[] = [

    {
        id: 1,
        name: "Violino",
        slug: "violino",
        description: `O estudo do violino desenvolve postura, posicionamento das mãos, controle do arco, afinação e leitura de partituras.

Por não possuir trastes, o instrumento exige um trabalho cuidadoso de percepção auditiva e precisão dos dedos, além do controle da velocidade, pressão e direção do arco.

As aulas exploram escalas, articulações, vibrato, dinâmica e interpretação, utilizando repertórios eruditos e populares. Conforme o aluno evolui, são introduzidas técnicas mais avançadas, improvisação e desenvolvimento da expressividade característica do instrumento.`,
        image: "/assets/violino.jpg",
        classification: "A partir de 7 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [1, 2]
    },

    {
        id: 2,
        name: "Violoncelo",
        slug: "violoncelo",
        description: `O violoncelo combina uma sonoridade profunda e expressiva com grande variedade de recursos técnicos. O ensino trabalha postura, posicionamento das mãos, controle do arco, afinação, escalas e leitura musical.

A ausência de trastes torna a percepção auditiva especialmente importante para encontrar e manter a afinação, enquanto o controle do arco permite explorar diferentes intensidades, articulações e timbres.

As aulas também trabalham vibrato e interpretação, passando por repertórios clássicos e populares de acordo com o nível e os objetivos do aluno.`,
        image: "/assets/violoncelo.jpg",
        classification: "A partir de 8 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [1, 2]
    },

    {
        id: 3,
        name: "Piano",
        slug: "piano",
        description: `O piano permite trabalhar simultaneamente melodia, harmonia e ritmo, tornando o instrumento uma excelente ferramenta para desenvolver uma compreensão ampla da música.

As aulas abordam leitura de partituras, escalas, acordes, arpejos, independência das mãos, coordenação e técnicas de interpretação. O aluno aprende a controlar dinâmica, articulação e expressão enquanto desenvolve a capacidade de executar diferentes linhas musicais ao mesmo tempo.

O repertório pode passar por música clássica, popular, trilhas sonoras e arranjos, avançando posteriormente para acompanhamento, composição e criação musical.`,
        image: "/assets/piano.jpg",
        classification: "A partir de 6 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [1]
    },

    {
        id: 4,
        name: "Teoria",
        slug: "teoria",
        description: `O estudo da teoria musical apresenta os fundamentos necessários para compreender como a música é construída e organizada.

As aulas trabalham leitura de partituras, notas, claves, figuras e valores rítmicos, compassos, escalas, intervalos, tonalidades e formação de acordes.

Também são desenvolvidas percepção rítmica e melódica, conceitos de harmonia e análise musical, permitindo identificar estruturas e relações presentes nas músicas.

O conhecimento adquirido pode ser aplicado diretamente ao estudo de qualquer instrumento, facilitando a leitura, a interpretação e a criação musical.`,
        image: "/assets/teoriamusical.jpg",
        classification: "A partir de 10 anos",
        duration: "60 minutos",
        quantity: "1 aula por semana",
        type: "Em grupo",
        teacherId: [1, 3]
    },

    {
        id: 5,
        name: "Guitarra",
        slug: "guitarra",
        description: `O estudo da guitarra combina técnica, ritmo, harmonia e criação de frases musicais. As aulas trabalham acordes, escalas, cifras, tablaturas, palhetada e técnicas de mão direita e esquerda.

Também são explorados recursos característicos do instrumento, como bends, vibratos, slides, ligados e palm muting, desenvolvendo precisão, velocidade e controle rítmico.

O aluno aprende a construir riffs, bases e solos, explorando estilos como rock, blues, pop e funk. Conforme evolui, o estudo avança para improvisação, construção de solos e desenvolvimento de uma sonoridade própria.`,
        image: "/assets/guitarra.png",
        classification: "A partir de 10 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [2, 3]
    },

    {
        id: 6,
        name: "Violão",
        slug: "violao",
        description: `O violão oferece diferentes possibilidades de acompanhamento, execução melódica e criação de arranjos. As aulas trabalham formação de acordes, cifras, ritmos, batidas, dedilhados e arpejos.

O aluno desenvolve coordenação e independência entre as mãos, aprendendo a acompanhar músicas, construir introduções e explorar diferentes formas de conduzir uma composição.

O repertório pode incluir MPB, música brasileira, pop e rock, evoluindo para técnicas de fingerstyle, solos, improvisação e elaboração de arranjos próprios.`,
        image: "/assets/violao.jpg",
        classification: "A partir de 8 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [2]
    },

    {
        id: 7,
        name: "Bateria",
        slug: "bateria",
        description: `A bateria trabalha diretamente coordenação motora, independência dos membros, percepção rítmica e precisão de tempo.

O ensino aborda técnicas de baquetas, rudimentos, grooves, viradas, conduções e leitura rítmica, desenvolvendo a capacidade de executar diferentes padrões simultaneamente.

O aluno também aprende a compreender o papel da bateria dentro de uma banda, mantendo o pulso e interagindo com baixo, guitarra, teclado e voz.

O repertório explora estilos como rock, pop, funk e jazz, avançando para criação de grooves, dinâmica, variações rítmicas e performance.`,
        image: "/assets/bateria.jpg",
        classification: "A partir de 8 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [3]
    },

    {
        id: 8,
        name: "Canto",
        slug: "canto",
        description: `O estudo do canto trabalha a voz como instrumento, desenvolvendo respiração, apoio, afinação, articulação, extensão vocal, ressonância e controle da emissão.

As aulas também abordam aquecimento e preparação vocal, ajudando o aluno a utilizar a voz com maior segurança e consciência.

A interpretação recebe atenção especial, explorando dinâmica, fraseado, timbre, expressão e intenção musical.

O repertório é adaptado à extensão vocal, estilo e objetivos de cada aluno, permitindo desenvolver tanto a técnica quanto a presença de palco e a identidade artística.`,
        image: "/assets/canto.jpg",
        classification: "A partir de 10 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [1,3]
    },

    {
        id: 9,
        name: "Saxofone",
        slug: "sax",
        description: `O saxofone possui grande versatilidade sonora e é utilizado em estilos que vão do jazz e blues à música popular.

O ensino trabalha respiração, embocadura, postura, articulação, emissão sonora, escalas e leitura musical, desenvolvendo controle sobre a sonoridade e a afinação.

O aluno também explora dinâmica, fraseado e diferentes formas de articulação para construir uma interpretação mais expressiva.

Conforme avança, o estudo incorpora improvisação, construção de frases e aplicação de escalas e arpejos em repertórios variados.`,
        image: "/assets/sax.jpg",
        classification: "A partir de 10 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [3]
    },

    {
        id: 10,
        name: "Trompete",
        slug: "trompete",
        description: `O trompete exige controle preciso da respiração, embocadura e emissão para produzir diferentes registros e intensidades sonoras.

As aulas trabalham articulação, escalas, flexibilidade, resistência, afinação e leitura musical, desenvolvendo gradualmente o controle e a segurança na execução.

O aluno aprende a explorar dinâmica, ataque e projeção sonora, características marcantes do instrumento.

O repertório pode passar por música erudita, jazz e música popular, avançando para improvisação, construção de frases, interpretação e performance.`,
        image: "/assets/trompete.jpg",
        classification: "A partir de 10 anos",
        duration: "50 minutos",
        quantity: "1 aula por semana",
        type: "Individual",
        teacherId: [3,1,2]
    }

];