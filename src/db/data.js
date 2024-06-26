const data = [
  {
    id: 1,
    img: "https://imgnike-a.akamaihd.net/1920x1920/0243315B.jpg",
    title: "Tênis Air Jordan 1 Mid Masculino",
    prevPrice: "R$ 1139,99",
    company: ["All", "Nike"],
    op: "Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.",
    color: ["All", "White"]
  },
  {
    id: 2,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027664NX.jpg",
    title: "Dunk Low",
    prevPrice: "R$ 949,99",
    company: ["All", "Nike"],
    op: "Criado para as quadras, mas levado para as ruas, o ícone dos anos 80 retorna com detalhes clássicos e um toque retrô. Camadas de couro e tecidos em verdes e em tons naturais de oliva, tornando estes Dunks seus companheiros sazonais indispensáveis. O toque final? A gola acolchoada e decotada permite que você leve seu jogo para qualquer lugar com conforto.",
    color: ["All", "Green"]
  },
  {
    id:3,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02773051.jpg",
    title: "JORDAN NU RETRO 1 LOW",
    prevPrice: "R$ 899,99",
    company: ["All", "Nike"],
    op: "Vinte anos depois e esse cano baixo está de volta. Inspirado no logo Wings original e no design do Jordan 1, esse tênis para uso do dia a dia está pronto para o que você precisar. Use-o com baggy jeans, andando de skate ou para mostrar que tem estilo - a escolha é sua. Cabedal em material macio e um grande logo em relevo ajudará você a se manter em destaque, quer esteja elegante ou simples.",
    color: ["All", "White"]
  },
  {
    id: 4,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02472351.jpg",
    title: "Tênis Air Force 1 Mid '07 Masculino",
    prevPrice: "R$ 721,99",
    company: ["All", "Nike"],
    op: "O Nike Air Force 1 Mid '07 é tudo aquilo que você conhece: construção dos anos 80, couro suave e estilo de basquete. Adicionamos também um colarinho acolchoado médio com tira ajustável.",
    color: ["All", "White"]
  },
  {
    id: 5,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02729551.jpg",
    title: "Tênis Jordan Stay Loyal 3 Masculino",
    prevPrice: "R$ 949,99",
    company: ["All", "Nike"],
    op: "Você precisa saber onde esteve para saber para onde está indo. Levamos isso a sério ao criar o Stay Loyal 3, um tênis moderno baseado no legado da Air Jordan. Por dentro e por fora, ele é feito para oferecer versatilidade, com visual minimalista, amortecimento tipo nuvem e elementos de design que lembram o AJ4. Em outras palavras, estilo com poder duradouro comprovado.",
    color: ["All", "White"]
  },
  {
    id: 6,
    img: "https://imgnike-a.akamaihd.net/1920x1920/0223447T.jpg",
    title: "Tênis Air Jordan 1 Low SE Craft Masculino",
    prevPrice: "R$ 1139,99",
    company: ["All", "Nike"],
    op: "Sempre fresco e pronto para jogar, o AJ1 de perfil baixo é um dos tênis mais icônicos de todos os tempos. Esta versão incorpora tons naturais e detalhes de suede. É uma renovação marcante para uma lenda arrojada.",
    color: ["All", "gray"]
  },
  {
    id: 7,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02723751.jpg",
    title: "Air Jordan 4 Retro",
    prevPrice: "R$ 1614,99",
    company: ["All", "Nike"],
    op: "Novo fogo. Reacender uma cor adorada da marca, o AJ4 Red Cement traz um toque de tradição à silhueta vibrante. Os detalhes em vermelho fogo com efeito pontilhado lembram a coloração original White Cement, e o couro branco nítido mantém cada ajuste limpo.",
    color: ["All", "White"]
  },
  {
    id: 8,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027810ID.jpg",
    title: "Air Jordan 3",
    prevPrice: "R$ 1804,99",
    company: ["All", "Nike"],
    op: "Limpo e supremo, o lendário design Tinker Hatfield AJ3 que solidificou o lugar de MJ na história dos tênis está de volta. A estampa exclusiva de elefante reinventa o visual original icônico, enquanto o couro luxuoso e a camurça em toda a parte superior elevam cada passo. Destacando a marca Jumpman, sucessos vibrantes do Total Orange brilham contra o Night Stadium e o preto. Suave como o jogo de Jordan e pronto para você criar seu próprio legado.",
    color: ["All", "Black"]
  },
  {
    id: 9,
    img: "https://imgnike-a.akamaihd.net/1920x1920/0279065A.jpg",
    title: "Tênis Nike Air Force 1 '07 Masculino",
    prevPrice: "R$ 759,99",
    company: ["All", "Nike"],
    op: "Confortável, durável e atemporal - não é à toa que ele é o número 1. A construção dos anos 80 é combinada com cores clássicas para um estilo que acompanha se você está na quadra ou em movimento.",
    color: ["All", "White"]
  },
  {
    id: 10,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027993ID.jpg",
    title: "Tênis Air Jordan 1 Mid Craft Masculino",
    prevPrice: "R$ 1139,99",
    company: ["All", "Nike"],
    op: "Escuro, tempestuoso e cheio de estilo. Este AJ1 combina couro, camurça e tecidos no cabedal para um visual tonal com muita profundidade.",
    color: ["All", "Black"]
  },
  {
    id: 11,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027556NX.jpg",
    title: "Tênis Air Jordan 1 Low SE Craft Masculino",
    prevPrice: "R$ 1139,99",
    company: ["All", "Nike"],
    op: "Novas cores e texturas oferecem um AJ1 artesanal que mantém o visual clássico e a sensação familiar. Este favorito de todos os tempos é feito de materiais premium e decorado com pontas brutas e costura em contraste.",
    color: ["All", "Green"]
  },
  {
    id: 12,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027068IM.jpg",
    title: "Tênis Jordan Jumpman MVP Masculino",
    prevPrice: "R$ 1234,99",
    company: ["All", "Nike"],
    op: "Nós não inventamos o remix - mas considerando o material que podemos amostrar, este é o que você precisa. Acionamos o SP-12 e pegamos elementos do AJ6, 7 e 8, transformando-os em um calçado completamente novo que celebra o primeiro campeonato de 3 turfas de MJ. Com detalhes em couro, tecido e nobuck, esse tênis homenageia um legado enquanto incentiva você a consolidar o seu próprio.",
    color: ["All", "Black"]
  },
  {
    id: 13,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027493ID.jpg",
    title: "Tênis Air Jordan 1 Low SE Masculino",
    prevPrice: "R$ 1139,99",
    company: ["All", "Nike"],
    op: "Visual novo, sensação familiar. Toda vez que o AJ1 recebe um remake, você tem um tênis clássico em novas cores e texturas. Materiais e detalhes premium dão uma expressão moderna a um favorito de todos os tempos.",
    color: ["All", "Black"]
  },
  {
    id: 14,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02341615.jpg",
    title: "Valerian Blue",
    prevPrice: "R$ 899,99",
    company: ["All", "Nike"],
    op: "Originalmente criado para as quadras, o Dunk mais tarde foi para as ruas. Mais de 35 anos após sua estreia, a silhueta ainda oferece um estilo ousado e desafiador e continua sendo um visual cobiçado por equipes em ambos os lados. esporte e cultura.Agora, as cores universitárias OG retornam cobertos de sobreposições de material nítidas com color block inspirado na herança. A tecnologia moderna de calçados traz o conforto do design para o século 21, enquanto uma combinação ousada de Valerian Blue e White dá a essas cores uma sensação clássica inspirada nas esperanças de título de um time dos anos 80.",
    color: ["All", "White"]
  },
  {
    id: 15,
    img: "https://imgnike-a.akamaihd.net/1920x1920/028264NX.jpg",
    title: "Tênis Nike Mac Attack Masculino",
    prevPrice: "R$ 854,99",
    company: ["All", "Nike"],
    op: "Yin e yang. A paixão do mercurial. O equilíbrio é encontrado além dos limites com esta recuperação 1:1 de um visual famoso. Este tênis icônico quebrou os moldes do tênis, e essa iteração difusa quebra os moldes por si só, com um tratamento de camurça desgrenhado. Os tecidos neutros pulsam sob as camadas de camurça para um contraste clean e respirável. Completo com uma etiqueta xadrez na língua e o estilo característico dos anos 80, o Nike Attack está pronto para você impulsionar o status quo.",
    color: ["All", "Green"]
  },
  {
    id: 16,
    img: "https://imgnike-a.akamaihd.net/1920x1920/022788NX.jpg",
    title: "Tênis Nike KD Trey 5 X Masculino",
    prevPrice: "R$ 626,99",
    company: ["All", "Nike"],
    op: "Com seu cabedal leve e sistema de suporte macio, o KD Trey 5 X pode ajudá-lo a flutuar como o KD, esperando o momento perfeito para correr até a cesta. Uma faixa segura no mediopé é adequada para pontuações e defensivas, para que você possa travar e continuar vencendo.",
    color: ["All", "Green"]
  },
  {
    id: 17,
    img: "https://imgnike-a.akamaihd.net/1920x1920/021947NM.jpg",
    title: "Tênis Nike Downshifter 12 Next Nature Infantil",
    prevPrice: "R$ 294,49",
    company: ["All", "Nike"],
    op: "Seja aprendendo a andar ou descobrindo tudo que é possível, as crianças se sentem mais confiantes com o Nike Downshifter 12. O suporte ventilado até a parte de cima o torna leve e versátil para uso diário. A cobertura extra em borracha na sola garante maior durabilidade para que os pezinhos possam continuar seguindo em frente.",
    color: ["All", "Purple"]
  },
  {
    id: 18,
    img: "https://imgnike-a.akamaihd.net/1920x1920/027854P1.jpg",
    title: "Terra Forma x Off-White™ Mantra Orange",
    prevPrice: "R$ 1699,99",
    company: ["All", "Nike"],
    op: "O legado de Virgil Abloh continua. Inspirado nos produtos da Nike do final dos anos 80 e início dos anos 90, o Terra Forma reinventa as botas de caminhada como só a Off-White™ consegue. Detalhes imaginativos, como sobreposições de camurça chamativas e uma língua desfiada, fazem referência a designs passados, ao mesmo tempo que ultrapassam os limites da reinvenção. Para finalizar, a mensagem da sola robusta adorna cada passo com um lembrete: pise com leveza e trate a terra com cuidado.",
    color: ["All", "Red"]
  },
  {
    id: 19,
    img: "https://imgnike-a.akamaihd.net/1920x1920/028351P1.jpg",
    title: "Tênis Nike Giannis Immortality 3 All-Star Weekend Masculino",
    prevPrice: "R$ 854,99",
    company: ["All", "Nike"],
    op: "Como você quer que seu jogo seja lembrado? Preserve seu lugar entre os grandes, como Giannis, no Giannis Immortality 3. Cuidadosamente feito para o jogo de alta velocidade e sem posição de hoje, ele é mais macio do que a iteração anterior com um padrão de tração específico que é perfeito para dar o passo perfeito do Euro a caminho da glória.    ",
    color: ["All", "Red"]
  },
  {
    id: 20,
    img: "https://imgnike-a.akamaihd.net/1920x1920/022833MT.jpg",
    title: "Tênis Nike Zoom Fly 5 Masculino",
    prevPrice: "R$ 949,99",
    company: ["All", "Nike"],
    op: "Preencha a lacuna entre o treino de fim de semana e o dia da corrida em um design durável que pode ser implantado não apenas na linha de partida de sua corrida favorita, mas nos dias e meses após sua conquista. Oferece conforto e confiabilidade, mas com uma sensação de propulsão que o ajudará a se sentir rápido e fresco. Esse tipo de versatilidade é incomum na arena de corrida. Mas quem disse que você não pode ter tudo?",
    color: ["All", "Pink"]
  },
  {
    id: 21,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02373615.jpg",
    title: "Tênis Air Jordan 2",
    prevPrice: "R$ 1595,99",
    company: ["All", "Nike"],
    op: "Como uma lufada de ar fresco, este AJ2 atualiza seu design de 1986 com muitos detalhes energéticos e o estilo do céu do limite do Príncipe do Reggaeton. A colorway Celestine Blue é um cenário perfeito para painéis inchados na parte superior e gráficos em nuvem ao redor do calcanhar, gola e palmilha. Adicione isso aos acentos de costura do arco-íris e ao rosto sorridente de J Balvin e você certamente roubará os corações dos transeuntes. Materiais premium e amortecimento Air no calcanhar vão mantê-lo dançando. E quando as luzes se apagam, você não precisa parar - basta ativar o logotipo da língua, deixar suas solas que brilham no escuro brilharem e deixar sua marca. Este é sobre seguir sua luz, cuidar de sua mente e saltar para seus sonhos. Então amarre e pule leve. DQ7691-419",
    color: ["All", "Blue"]
  },
  {
    id: 22,
    img: "https://imgnike-a.akamaihd.net/1920x1920/02734615.jpg",
    title: "Tênis Nike Waffle Debut Masculino",
    prevPrice: "R$ 351,49",
    company: ["All", "Nike"],
    op: "O retrô é modernizado com estes tênis elegantes inspirados no Nike Daybreak. O suede e o nylon que marcaram época são combinados com uma atualização de três cores, e a entressola com plataforma atualizada proporciona mais elevação. Estilo, conforto e a icônica sola Waffle são o complemento perfeito para sua rotina diária.",
    color: ["All", "Blue"]
  },
];

export default data;