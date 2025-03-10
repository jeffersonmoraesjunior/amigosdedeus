/**
 * Banco de dados local de versículos bíblicos categorizados por sentimentos
 * Isso elimina a necessidade de fazer chamadas à API para obter versículos
 */

export interface Verse {
  text: string;
  reference: string;
  categories: string[];
}

// Categorias de sentimentos
export const FEELING_CATEGORIES = {
  ANXIETY: ['ansioso', 'ansiosa', 'ansiedade', 'preocupado', 'preocupada', 'medo', 'nervoso', 'nervosa', 'tenso', 'tensa', 'aflito', 'aflita', 'angústia'],
  SADNESS: ['triste', 'tristeza', 'deprimido', 'deprimida', 'depressão', 'melancolia', 'melancólico', 'melancólica', 'desanimado', 'desanimada', 'dor', 'sofrimento', 'luto'],
  ANGER: ['raiva', 'irritado', 'irritada', 'frustrado', 'frustrada', 'bravo', 'brava', 'indignado', 'indignada', 'ódio', 'ressentimento', 'amargo', 'amarga'],
  JOY: ['feliz', 'felicidade', 'alegre', 'alegria', 'contente', 'satisfeito', 'satisfeita', 'realizado', 'realizada', 'jubiloso', 'jubilosa', 'animado', 'animada'],
  GRATITUDE: ['grato', 'grata', 'gratidão', 'agradecido', 'agradecida', 'abençoado', 'abençoada', 'reconhecido', 'reconhecida', 'agraciado', 'agraciada'],
  CONFUSION: ['confuso', 'confusa', 'perdido', 'perdida', 'indeciso', 'indecisa', 'dúvida', 'incerto', 'incerta', 'desorientado', 'desorientada', 'perplexo', 'perplexa'],
  HOPE: ['esperança', 'esperançoso', 'esperançosa', 'otimista', 'confiante', 'fé', 'expectativa', 'positivo', 'positiva', 'promessa', 'futuro'],
  LOVE: ['amor', 'amoroso', 'amorosa', 'apaixonado', 'apaixonada', 'carinho', 'carinhoso', 'carinhosa', 'afeto', 'afetuoso', 'afetuosa', 'compaixão'],
  LONELINESS: ['sozinho', 'sozinha', 'solidão', 'abandonado', 'abandonada', 'isolado', 'isolada', 'rejeitado', 'rejeitada', 'excluído', 'excluída', 'solitário', 'solitária'],
  FAITH_CRISIS: ['crise', 'fé', 'dúvida', 'espiritual', 'distante', 'deus', 'afastado', 'afastada', 'questionamento', 'descrença', 'incerteza', 'espiritual'],
  GENERAL: ['geral', 'cotidiano', 'dia a dia', 'rotina', 'vida', 'comum', 'normal'],
  PEACE: ['paz', 'tranquilo', 'tranquila', 'sereno', 'serena', 'calmo', 'calma', 'sossegado', 'sossegada', 'quietude', 'harmonia', 'equilíbrio'],
  GUILT: ['culpa', 'culpado', 'culpada', 'arrependido', 'arrependida', 'remorso', 'peso na consciência', 'vergonha', 'erro', 'pecado', 'falha'],
  FEAR: ['medo', 'assustado', 'assustada', 'temor', 'amedrontado', 'amedrontada', 'receio', 'pavor', 'terror', 'inseguro', 'insegura', 'ameaçado', 'ameaçada'],
  DOUBT: ['dúvida', 'incerteza', 'questionamento', 'indecisão', 'hesitação', 'insegurança', 'incerto', 'incerta', 'confuso', 'confusa', 'perdido', 'perdida'],
  FORGIVENESS: ['perdão', 'perdoar', 'reconciliação', 'paz', 'liberdade', 'libertação', 'cura', 'restauração', 'renovação', 'recomeço'],
  STRENGTH: ['força', 'fortaleza', 'resistência', 'perseverança', 'determinação', 'garra', 'coragem', 'vigor', 'poder', 'superação', 'resiliência'],
  PURPOSE: ['propósito', 'sentido', 'direção', 'chamado', 'vocação', 'missão', 'objetivo', 'destino', 'significado', 'razão', 'motivação'],
  WISDOM: ['sabedoria', 'discernimento', 'entendimento', 'conhecimento', 'compreensão', 'prudência', 'sensatez', 'juízo', 'orientação', 'direção'],
  HEALING: ['cura', 'restauração', 'recuperação', 'renovação', 'libertação', 'transformação', 'saúde', 'bem-estar', 'restabelecimento', 'regeneração'],
  TRUST: ['confiança', 'fé', 'segurança', 'certeza', 'convicção', 'crença', 'dependência', 'entrega', 'abandono', 'rendição'],
  PATIENCE: ['paciência', 'espera', 'aguardo', 'perseverança', 'persistência', 'constância', 'calma', 'tolerância'],
  IDENTITY: ['identidade', 'quem sou', 'propósito de vida', 'chamado', 'vocação', 'significado', 'valor próprio', 'autoestima'],
  WORSHIP: ['adoração', 'louvor', 'gratidão', 'exaltação', 'glorificar', 'celebração', 'alegria no senhor', 'presença de deus'],
  TEMPTATION: ['tentação', 'provação', 'teste', 'desafio', 'luta', 'batalha', 'resistência', 'fraqueza'],
  VICTORY: ['vitória', 'conquista', 'superação', 'triunfo', 'vencedor', 'sucesso', 'realização', 'alcance'],
  CHANGE: ['mudança', 'transformação', 'novo', 'diferente', 'transição', 'adaptação', 'ajuste', 'renovação'],
  FRIENDSHIP: ['amizade', 'companheirismo', 'relacionamento', 'parceria', 'camaradagem', 'união', 'vínculo', 'conexão'],
  GROWTH: ['crescimento', 'desenvolvimento', 'progresso', 'evolução', 'amadurecimento', 'aprendizado', 'transformação'],
  WORTH: ['valor', 'autoestima', 'dignidade', 'importância', 'significado', 'merecimento', 'aceitação'],
  REST: ['descanso', 'repouso', 'relaxamento', 'tranquilidade', 'quietude', 'serenidade', 'calma'],
  COMMITMENT: ['compromisso', 'dedicação', 'fidelidade', 'lealdade', 'perseverança', 'constância', 'firmeza'],
  HUMILITY: ['humildade', 'mansidão', 'simplicidade', 'modéstia', 'submissão', 'docilidade', 'brandura'],
  LEARNING: ['aprendizado', 'estudo', 'conhecimento', 'compreensão', 'entendimento', 'instrução', 'sabedoria prática'],
  RELATIONSHIPS: ['relacionamentos', 'convivência', 'interação', 'conexão', 'vínculos', 'amizade', 'comunhão']
};

// Banco de dados de versículos
export const VERSES_DATABASE: Verse[] = [
  // Versículos para ANSIEDADE
  {
    text: "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:6-7",
    categories: ["ANXIETY"]
  },
  {
    text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
    reference: "1 Pedro 5:7",
    categories: ["ANXIETY"]
  },
  {
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    reference: "Isaías 41:10",
    categories: ["ANXIETY", "FEAR"]
  },
  {
    text: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei. Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração; e achareis descanso para a vossa alma.",
    reference: "Mateus 11:28-29",
    categories: ["HEALING", "PEACE", "SADNESS"]
  },
  
  // Versículos para TRISTEZA
  {
    text: "Bem-aventurados os que choram, porque serão consolados.",
    reference: "Mateus 5:4",
    categories: ["SADNESS"]
  },
  {
    text: "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
    reference: "Salmos 34:18",
    categories: ["SADNESS"]
  },
  {
    text: "Ele enxugará dos seus olhos toda lágrima; e não haverá mais morte, nem haverá mais pranto, nem lamento, nem dor; porque já as primeiras coisas são passadas.",
    reference: "Apocalipse 21:4",
    categories: ["SADNESS", "HOPE"]
  },
  
  // Versículos para RAIVA
  {
    text: "Irai-vos e não pequeis; não se ponha o sol sobre a vossa ira.",
    reference: "Efésios 4:26",
    categories: ["ANGER"]
  },
  {
    text: "Sabei isto, meus amados irmãos: Todo homem seja pronto para ouvir, tardio para falar, tardio para se irar. Porque a ira do homem não produz a justiça de Deus.",
    reference: "Tiago 1:19-20",
    categories: ["ANGER"]
  },
  {
    text: "Deixa a ira, abandona o furor; não te impacientes; isso só leva ao mal.",
    reference: "Salmos 37:8",
    categories: ["ANGER"]
  },
  
  // Versículos para ALEGRIA
  {
    text: "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos.",
    reference: "Filipenses 4:4",
    categories: ["JOY"]
  },
  {
    text: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.",
    reference: "Salmos 118:24",
    categories: ["JOY", "GRATITUDE"]
  },
  {
    text: "A alegria do Senhor é a vossa força.",
    reference: "Neemias 8:10",
    categories: ["JOY"]
  },
  
  // Versículos para GRATIDÃO
  {
    text: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    reference: "1 Tessalonicenses 5:18",
    categories: ["GRATITUDE"]
  },
  {
    text: "Entrai pelas suas portas com ações de graças e nos seus átrios, com hinos de louvor; rendei-lhe graças e bendizei-lhe o nome.",
    reference: "Salmos 100:4",
    categories: ["GRATITUDE", "JOY"]
  },
  
  // Versículos para CONFUSÃO
  {
    text: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não censura, e ser-lhe-á dada.",
    reference: "Tiago 1:5",
    categories: ["CONFUSION"]
  },
  {
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reference: "Provérbios 3:5-6",
    categories: ["CONFUSION", "FAITH_CRISIS"]
  },
  
  // Versículos para ESPERANÇA
  {
    text: "Porque eu bem sei os planos que estou projetando para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança.",
    reference: "Jeremias 29:11",
    categories: ["HOPE"]
  },
  {
    text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; andarão e não se fatigarão.",
    reference: "Isaías 40:31",
    categories: ["HOPE", "ANXIETY"]
  },
  {
    text: "E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.",
    reference: "Romanos 5:5",
    categories: ["HOPE", "LOVE"]
  },
  
  // Versículos para AMOR
  {
    text: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece, não se conduz inconvenientemente, não procura os seus interesses, não se exaspera, não se ressente do mal; não se alegra com a injustiça, mas regozija-se com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta.",
    reference: "1 Coríntios 13:4-7",
    categories: ["LOVE"]
  },
  {
    text: "Nisto conhecemos o amor: que Cristo deu a sua vida por nós; e devemos dar nossa vida pelos irmãos.",
    reference: "1 João 3:16",
    categories: ["LOVE"]
  },
  {
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
    categories: ["LOVE", "HOPE"]
  },
  
  // Versículos para SOLIDÃO
  {
    text: "Não te deixarei, nem te desampararei.",
    reference: "Hebreus 13:5",
    categories: ["LONELINESS"]
  },
  {
    text: "Quando passares pelas águas, eu serei contigo; quando, pelos rios, eles não te submergirão; quando passares pelo fogo, não te queimarás, nem a chama arderá em ti.",
    reference: "Isaías 43:2",
    categories: ["LONELINESS", "ANXIETY"]
  },
  {
    text: "Eis que estou convosco todos os dias até à consumação do século.",
    reference: "Mateus 28:20",
    categories: ["LONELINESS"]
  },
  
  // Versículos para CRISE DE FÉ
  {
    text: "Disse-lhe Jesus: Porque me viste, creste? Bem-aventurados os que não viram e creram.",
    reference: "João 20:29",
    categories: ["FAITH_CRISIS"]
  },
  {
    text: "E Jesus lhes disse: Por causa da vossa pouca fé; porque em verdade vos digo que, se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e ele passará. Nada vos será impossível.",
    reference: "Mateus 17:20",
    categories: ["FAITH_CRISIS"]
  },
  {
    text: "Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que se não veem.",
    reference: "Hebreus 11:1",
    categories: ["FAITH_CRISIS", "HOPE"]
  },
  
  // Versículos GERAIS
  {
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    categories: ["GENERAL", "HOPE"]
  },
  {
    text: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
    reference: "Mateus 6:33",
    categories: ["GENERAL"]
  },
  {
    text: "Porque eu, o Senhor, teu Deus, te seguro pela tua mão direita e te digo: Não temas, eu te ajudo.",
    reference: "Isaías 41:13",
    categories: ["GENERAL", "ANXIETY"]
  },
  {
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
    categories: ["GENERAL", "HOPE"]
  },

  // Versículos para PAZ
  {
    text: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    reference: "João 14:27",
    categories: ["PEACE", "FEAR"]
  },
  {
    text: "Grande paz têm os que amam a tua lei; para eles não há tropeço.",
    reference: "Salmos 119:165",
    categories: ["PEACE"]
  },
  {
    text: "O efeito da justiça será paz, e o fruto da justiça, repouso e segurança para sempre.",
    reference: "Isaías 32:17",
    categories: ["PEACE", "TRUST"]
  },
  {
    text: "E a paz de Deus, que excede todo entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:7",
    categories: ["PEACE", "ANXIETY"]
  },
  {
    text: "Em paz me deito e logo pego no sono, porque só tu, Senhor, me fazes repousar em segurança.",
    reference: "Salmos 4:8",
    categories: ["PEACE", "TRUST"]
  },

  // Versículos para CULPA
  {
    text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
    reference: "1 João 1:9",
    categories: ["GUILT", "FORGIVENESS"]
  },
  {
    text: "Porque eu sou o Senhor, vosso Deus, que vos tomo pela vossa mão direita e vos digo: Não temais, eu vos ajudo.",
    reference: "Isaías 41:13",
    categories: ["GUILT", "FEAR"]
  },
  {
    text: "Bem-aventurado aquele cuja iniquidade é perdoada, cujo pecado é coberto.",
    reference: "Salmos 32:1",
    categories: ["GUILT", "FORGIVENESS"]
  },
  {
    text: "Quanto dista o Oriente do Ocidente, assim afasta de nós as nossas transgressões.",
    reference: "Salmos 103:12",
    categories: ["GUILT", "FORGIVENESS"]
  },
  {
    text: "Vinde, pois, e arrazoemos, diz o Senhor: ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve; ainda que sejam vermelhos como o carmesim, se tornarão como a lã.",
    reference: "Isaías 1:18",
    categories: ["GUILT", "FORGIVENESS"]
  },

  // Versículos para MEDO
  {
    text: "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.",
    reference: "2 Timóteo 1:7",
    categories: ["FEAR", "STRENGTH"]
  },
  {
    text: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a fortaleza da minha vida; de quem me recearei?",
    reference: "Salmos 27:1",
    categories: ["FEAR", "TRUST"]
  },
  {
    text: "No amor não há temor; antes, o perfeito amor lança fora o temor; porque o temor tem consigo a pena, e o que teme não é perfeito no amor.",
    reference: "1 João 4:18",
    categories: ["FEAR", "LOVE"]
  },
  {
    text: "Quando passar pelas águas, estarei contigo; quando pelos rios, eles não te submergirão; quando passares pelo fogo, não te queimarás, nem a chama arderá em ti.",
    reference: "Isaías 43:2",
    categories: ["FEAR", "TRUST"]
  },
  {
    text: "Busquei o Senhor, e ele me respondeu; livrou-me de todos os meus temores.",
    reference: "Salmos 34:4",
    categories: ["FEAR", "TRUST"]
  },

  // Versículos para DÚVIDA
  {
    text: "Disse-lhe Jesus: Porque me viste, creste? Bem-aventurados os que não viram e creram.",
    reference: "João 20:29",
    categories: ["DOUBT", "FAITH_CRISIS"]
  },
  {
    text: "Fiel é Deus, que não permitirá que sejais tentados além das vossas forças; mas, com a tentação, dará também o escape, para que a possais suportar.",
    reference: "1 Coríntios 10:13",
    categories: ["DOUBT", "STRENGTH"]
  },
  {
    text: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não censura, e ser-lhe-á dada. Peça-a, porém, com fé, não duvidando; porque o que duvida é semelhante à onda do mar, que é levada pelo vento e lançada de uma para outra parte.",
    reference: "Tiago 1:5-6",
    categories: ["DOUBT", "WISDOM"]
  },
  {
    text: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
    reference: "Salmos 37:5",
    categories: ["DOUBT", "TRUST"]
  },
  {
    text: "Jesus, porém, olhando para eles, disse: Para os homens é impossível, mas não para Deus, porque para Deus todas as coisas são possíveis.",
    reference: "Marcos 10:27",
    categories: ["DOUBT", "FAITH_CRISIS"]
  },

  // Versículos para PERDÃO
  {
    text: "Suportai-vos uns aos outros e perdoai-vos mutuamente, se alguém tiver queixa contra outro. Como o Senhor vos perdoou, assim também perdoai vós.",
    reference: "Colossenses 3:13",
    categories: ["FORGIVENESS", "LOVE"]
  },
  {
    text: "Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará; se, porém, não perdoardes aos homens as suas ofensas, tampouco vosso Pai vos perdoará as vossas ofensas.",
    reference: "Mateus 6:14-15",
    categories: ["FORGIVENESS"]
  },
  {
    text: "Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
    reference: "Efésios 4:32",
    categories: ["FORGIVENESS", "LOVE"]
  },
  {
    text: "Então, Pedro, aproximando-se dele, disse: Senhor, até quantas vezes pecará meu irmão contra mim, e eu lhe perdoarei? Até sete vezes? Respondeu-lhe Jesus: Não te digo que até sete vezes, mas até setenta vezes sete.",
    reference: "Mateus 18:21-22",
    categories: ["FORGIVENESS"]
  },
  {
    text: "Mas eu vos digo: Amai os vossos inimigos, bendizei os que vos maldizem, fazei bem aos que vos odeiam e orai pelos que vos maltratam e vos perseguem.",
    reference: "Mateus 5:44",
    categories: ["FORGIVENESS", "LOVE"]
  },

  // Versículos para FORÇA
  {
    text: "Posso todas as coisas naquele que me fortalece.",
    reference: "Filipenses 4:13",
    categories: ["STRENGTH", "HOPE"]
  },
  {
    text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; andarão e não se fatigarão.",
    reference: "Isaías 40:31",
    categories: ["STRENGTH", "HOPE"]
  },
  {
    text: "O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido; pelo que o meu coração salta de prazer, e com o meu canto o louvarei.",
    reference: "Salmos 28:7",
    categories: ["STRENGTH", "TRUST"]
  },
  {
    text: "Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor.",
    reference: "Salmos 31:24",
    categories: ["STRENGTH", "HOPE"]
  },
  {
    text: "Finalmente, fortalecei-vos no Senhor e na força do seu poder.",
    reference: "Efésios 6:10",
    categories: ["STRENGTH", "FAITH_CRISIS"]
  },

  // Versículos para PROPÓSITO
  {
    text: "Porque eu bem sei os planos que estou projetando para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança.",
    reference: "Jeremias 29:11",
    categories: ["PURPOSE", "HOPE"]
  },
  {
    text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    reference: "Romanos 8:28",
    categories: ["PURPOSE", "TRUST"]
  },
  {
    text: "Porque dele, e por ele, e para ele são todas as coisas; glória, pois, a ele eternamente. Amém!",
    reference: "Romanos 11:36",
    categories: ["PURPOSE"]
  },
  {
    text: "Portanto, quer comais, quer bebais ou façais outra coisa qualquer, fazei tudo para a glória de Deus.",
    reference: "1 Coríntios 10:31",
    categories: ["PURPOSE", "GENERAL"]
  },
  {
    text: "Porque somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus antes preparou para que andássemos nelas.",
    reference: "Efésios 2:10",
    categories: ["PURPOSE", "HOPE"]
  },

  // Versículos para SABEDORIA
  {
    text: "O temor do Senhor é o princípio da sabedoria; bom entendimento têm todos os que cumprem os seus mandamentos; o seu louvor permanece para sempre.",
    reference: "Salmos 111:10",
    categories: ["WISDOM"]
  },
  {
    text: "Feliz é o homem que acha sabedoria, e o homem que adquire conhecimento; porque melhor é o lucro que ela dá do que o da prata, e melhor a sua renda do que o ouro mais fino.",
    reference: "Provérbios 3:13-14",
    categories: ["WISDOM", "PURPOSE"]
  },
  {
    text: "Se, porém, algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não censura, e ser-lhe-á dada.",
    reference: "Tiago 1:5",
    categories: ["WISDOM", "TRUST"]
  },
  {
    text: "A sabedoria que vem do alto é, primeiramente, pura, depois pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade e sem hipocrisia.",
    reference: "Tiago 3:17",
    categories: ["WISDOM", "PEACE"]
  },
  {
    text: "Porque o Senhor dá a sabedoria, e da sua boca vem o conhecimento e o entendimento.",
    reference: "Provérbios 2:6",
    categories: ["WISDOM", "TRUST"]
  },

  // Versículos para CURA
  {
    text: "Ele sara os quebrantados de coração e cura-lhes as feridas.",
    reference: "Salmos 147:3",
    categories: ["HEALING", "SADNESS"]
  },
  {
    text: "O espírito do homem sustentará a sua enfermidade, mas ao espírito abatido, quem o levantará?",
    reference: "Provérbios 18:14",
    categories: ["HEALING", "STRENGTH"]
  },
  {
    text: "E a oração da fé salvará o doente, e o Senhor o levantará; e, se houver cometido pecados, ser-lhe-ão perdoados.",
    reference: "Tiago 5:15",
    categories: ["HEALING", "FORGIVENESS"]
  },
  {
    text: "Pelas suas pisaduras fomos sarados.",
    reference: "Isaías 53:5",
    categories: ["HEALING", "HOPE"]
  },
  {
    text: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios. É ele que perdoa todas as tuas iniquidades e sara todas as tuas enfermidades.",
    reference: "Salmos 103:2-3",
    categories: ["HEALING", "GRATITUDE", "FORGIVENESS"]
  },

  // Versículos para CONFIANÇA
  {
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reference: "Provérbios 3:5-6",
    categories: ["TRUST", "WISDOM"]
  },
  {
    text: "Entrega o teu caminho ao Senhor, confia nele, e o mais ele fará.",
    reference: "Salmos 37:5",
    categories: ["TRUST", "HOPE"]
  },
  {
    text: "Mas eu confio em ti, ó Senhor; e digo: Tu és o meu Deus. Os meus tempos estão nas tuas mãos.",
    reference: "Salmos 31:14-15",
    categories: ["TRUST", "FAITH_CRISIS"]
  },
  {
    text: "Bendito o homem que confia no Senhor e cuja esperança é o Senhor. Porque ele é como a árvore plantada junto às águas, que estende as suas raízes para o ribeiro e não receia quando vem o calor.",
    reference: "Jeremias 17:7-8",
    categories: ["TRUST", "STRENGTH"]
  },
  {
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
    reference: "Isaías 41:10",
    categories: ["TRUST", "FEAR"]
  },
  {
    text: "O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido; pelo que o meu coração salta de prazer, e com o meu canto o louvarei.",
    reference: "Salmos 28:7",
    categories: ["TRUST", "JOY"]
  },
  {
    text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    reference: "Salmos 91:1",
    categories: ["TRUST", "PEACE"]
  },

  // Versículos adicionais para ANSIEDADE
  {
    text: "Quando a ansiedade já me dominava no íntimo, o teu consolo trouxe alívio à minha alma.",
    reference: "Salmos 94:19",
    categories: ["ANXIETY", "PEACE"]
  },
  {
    text: "Acalme-se e saiba que eu sou Deus; serei exaltado entre as nações, serei exaltado na terra.",
    reference: "Salmos 46:10",
    categories: ["ANXIETY", "PEACE", "TRUST"]
  },
  {
    text: "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam.",
    reference: "Naum 1:7",
    categories: ["ANXIETY", "TRUST", "PROTECTION"]
  },

  // Versículos adicionais para FORÇA
  {
    text: "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.",
    reference: "Deuteronômio 31:6",
    categories: ["STRENGTH", "FEAR", "TRUST"]
  },
  {
    text: "Eu te instruirei e te ensinarei no caminho que você deve seguir; eu o aconselharei e cuidarei de você.",
    reference: "Salmos 32:8",
    categories: ["STRENGTH", "WISDOM", "TRUST"]
  },
  {
    text: "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.",
    reference: "Salmos 18:2",
    categories: ["STRENGTH", "PROTECTION", "TRUST"]
  },

  // Versículos adicionais para CURA
  {
    text: "Ele enviou sua palavra e os curou, e os livrou da morte.",
    reference: "Salmos 107:20",
    categories: ["HEALING", "HOPE"]
  },
  {
    text: "O Espírito do Senhor Deus está sobre mim, porque o Senhor me ungiu para pregar boas-novas aos quebrantados, enviou-me a curar os quebrantados de coração, a proclamar libertação aos cativos e a pôr em liberdade os algemados.",
    reference: "Isaías 61:1",
    categories: ["HEALING", "HOPE", "STRENGTH"]
  },
  {
    text: "Cura-me, Senhor, e serei curado; salva-me, e serei salvo, pois tu és aquele a quem eu louvo.",
    reference: "Jeremias 17:14",
    categories: ["HEALING", "TRUST", "PRAISE"]
  },

  // Versículos adicionais para SABEDORIA
  {
    text: "Pois o Senhor é quem dá sabedoria; de sua boca procedem o conhecimento e o discernimento.",
    reference: "Provérbios 2:6",
    categories: ["WISDOM", "TRUST"]
  },
  {
    text: "Quem é sábio procura aprender, mas o tolo contenta-se com bobagens.",
    reference: "Provérbios 15:14",
    categories: ["WISDOM", "GROWTH"]
  },
  {
    text: "A sabedoria oferece proteção, como o faz o dinheiro, mas a vantagem do conhecimento é esta: a sabedoria preserva a vida de quem a possui.",
    reference: "Eclesiastes 7:12",
    categories: ["WISDOM", "PROTECTION"]
  },

  // Versículos adicionais para PROPÓSITO
  {
    text: "Antes de formá-lo no ventre eu o escolhi; antes de você nascer, eu o separei e o designei profeta às nações.",
    reference: "Jeremias 1:5",
    categories: ["PURPOSE", "TRUST"]
  },
  {
    text: "Pois eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
    categories: ["PURPOSE", "HOPE", "TRUST"]
  },
  {
    text: "Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus.",
    reference: "Mateus 5:16",
    categories: ["PURPOSE", "WISDOM"]
  },

  // Versículos adicionais para GRATIDÃO
  {
    text: "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
    reference: "1 Tessalonicenses 5:18",
    categories: ["GRATITUDE", "JOY"]
  },
  {
    text: "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
    reference: "Salmos 100:4",
    categories: ["GRATITUDE", "PRAISE"]
  },
  {
    text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
    reference: "Filipenses 4:6",
    categories: ["GRATITUDE", "ANXIETY", "PEACE"]
  },

  // Versículos adicionais para PERDÃO
  {
    text: "Pois, se perdoarem as ofensas uns dos outros, o Pai celestial também lhes perdoará.",
    reference: "Mateus 6:14",
    categories: ["FORGIVENESS", "LOVE"]
  },
  {
    text: "Livrem-se de toda amargura, indignação e ira, gritaria e calúnia, bem como de toda maldade.",
    reference: "Efésios 4:31",
    categories: ["FORGIVENESS", "PEACE"]
  },
  {
    text: "Não se deixem vencer pelo mal, mas vençam o mal com o bem.",
    reference: "Romanos 12:21",
    categories: ["FORGIVENESS", "STRENGTH"]
  },

  // Versículos adicionais para CONFIANÇA
  {
    text: "Mas bendito é o homem cuja confiança está no Senhor, cuja confiança nele está.",
    reference: "Jeremias 17:7",
    categories: ["TRUST", "HOPE"]
  },
  {
    text: "Quando estou com medo, eu confio em ti.",
    reference: "Salmos 56:3",
    categories: ["TRUST", "FEAR"]
  },
  {
    text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    reference: "Provérbios 3:5",
    categories: ["TRUST", "WISDOM"]
  },
  {
    text: "Mesmo quando eu andar por um vale de trevas e morte, não temerei mal algum, pois tu estás comigo; a tua vara e o teu cajado me consolam.",
    reference: "Salmos 23:4",
    categories: ["FEAR", "TRUST", "STRENGTH"]
  },
  {
    text: "Mas os que confiam no Senhor renovam suas forças. Voam alto como águias; correm e não se cansam, caminham e não se fatigam.",
    reference: "Isaías 40:31",
    categories: ["STRENGTH", "HOPE", "TRUST"]
  },
  {
    text: "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
    reference: "Isaías 41:10",
    categories: ["FEAR", "STRENGTH", "TRUST"]
  },
  {
    text: "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",
    reference: "João 16:33",
    categories: ["PEACE", "STRENGTH", "HOPE"]
  },
  {
    text: "Portanto, meus amados irmãos, mantenham-se firmes, e que nada os abale. Sejam sempre dedicados à obra do Senhor, pois vocês sabem que, no Senhor, o trabalho de vocês não será inútil.",
    reference: "1 Coríntios 15:58",
    categories: ["STRENGTH", "PURPOSE", "HOPE"]
  },
  {
    text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    reference: "Josué 1:9",
    categories: ["STRENGTH", "FEAR", "TRUST"]
  },
  {
    text: "O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças.",
    reference: "Salmos 28:7",
    categories: ["STRENGTH", "TRUST", "JOY"]
  },
  {
    text: "Espere no Senhor. Seja forte! Coragem! Espere no Senhor.",
    reference: "Salmos 27:14",
    categories: ["HOPE", "STRENGTH", "TRUST"]
  },
  {
    text: "Pois eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.",
    reference: "Jó 19:25",
    categories: ["HOPE", "FAITH_CRISIS", "TRUST"]
  },
  {
    text: "Mas, quanto a mim, cantarei a tua força, de manhã louvarei o teu amor; pois tu és a minha torre alta, meu refúgio no dia da adversidade.",
    reference: "Salmos 59:16",
    categories: ["STRENGTH", "TRUST", "GRATITUDE"]
  },
  {
    text: "Ele me faz repousar em pastos verdejantes. Leva-me para junto das águas de descanso; refrigera-me a alma.",
    reference: "Salmos 23:2-3",
    categories: ["PEACE", "HEALING", "TRUST"]
  },
  {
    text: "Cria em mim um coração puro, ó Deus, e renova dentro de mim um espírito estável.",
    reference: "Salmos 51:10",
    categories: ["HEALING", "FAITH_CRISIS", "GUILT"]
  },
  {
    text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
    categories: ["HOPE", "PURPOSE", "TRUST"]
  },
  {
    text: "Ele sara os de coração quebrantado e lhes cura as feridas. Ele determina o número de estrelas e chama cada uma pelo nome.",
    reference: "Salmos 147:3-4",
    categories: ["HEALING", "SADNESS", "TRUST"]
  },
  {
    text: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.",
    reference: "Salmos 23:4",
    categories: ["FEAR", "TRUST", "STRENGTH"]
  },
  {
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente nas tribulações.",
    reference: "Salmos 46:1",
    categories: ["STRENGTH", "TRUST", "ANXIETY"]
  },
  {
    text: "Porque eu, o Senhor, teu Deus, te tomo pela tua mão direita e te digo: Não temas, eu te ajudo.",
    reference: "Isaías 41:13",
    categories: ["FEAR", "TRUST", "STRENGTH"]
  },
  {
    text: "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
    reference: "Salmos 34:18",
    categories: ["HEALING", "SADNESS", "TRUST"]
  },
  {
    text: "Combati o bom combate, completei a carreira, guardei a fé. Agora me está reservada a coroa da justiça, que o Senhor, justo Juiz, me dará naquele dia; e não somente a mim, mas também a todos os que amarem a sua vinda.",
    reference: "2 Timóteo 4:7-8",
    categories: ["STRENGTH", "FAITH_CRISIS", "HOPE"]
  },
  {
    text: "Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou.",
    reference: "Romanos 8:37",
    categories: ["STRENGTH", "HOPE", "TRUST"]
  },
  {
    text: "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu.",
    reference: "Eclesiastes 3:1",
    categories: ["HOPE", "WISDOM", "PEACE"]
  },
  {
    text: "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.",
    reference: "Romanos 12:12",
    categories: ["HOPE", "STRENGTH", "PEACE"]
  },
  {
    text: "Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos os meus caminhos, diz o Senhor. Porque, assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.",
    reference: "Isaías 55:8-9",
    categories: ["WISDOM", "FAITH_CRISIS", "TRUST"]
  },
  {
    text: "O Senhor te guiará continuamente, e te fartará até em lugares áridos, e fortificará os teus ossos; serás como um jardim regado, e como um manancial, cujas águas nunca faltam.",
    reference: "Isaías 58:11",
    categories: ["STRENGTH", "HOPE", "TRUST"]
  },
  {
    text: "Não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
    reference: "Romanos 12:2",
    categories: ["PURPOSE", "WISDOM", "HEALING"]
  },
  {
    text: "Porque Deus é o que opera em vós tanto o querer como o efetuar, segundo a sua boa vontade.",
    reference: "Filipenses 2:13",
    categories: ["PURPOSE", "STRENGTH", "TRUST"]
  },
  {
    text: "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.",
    reference: "1 Coríntios 15:58",
    categories: ["STRENGTH", "PURPOSE", "HOPE"]
  },
  {
    text: "Mas os que esperam no Senhor renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",
    reference: "Isaías 40:31",
    categories: ["STRENGTH", "HOPE", "TRUST"]
  },
  {
    text: "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.",
    reference: "1 Coríntios 15:58",
    categories: ["STRENGTH", "PURPOSE", "HOPE"]
  },
  {
    text: "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.",
    reference: "Gálatas 6:9",
    categories: ["STRENGTH", "HOPE", "PURPOSE"]
  },
  {
    text: "Sabendo que a provação da vossa fé produz paciência. Tenha, porém, a paciência a sua obra perfeita, para que sejais perfeitos e completos, sem faltar em coisa alguma.",
    reference: "Tiago 1:3-4",
    categories: ["STRENGTH", "FAITH_CRISIS", "WISDOM"]
  },

  // Versículos para MOMENTOS DE DECISÃO
  {
    text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reference: "Provérbios 3:5-6",
    categories: ["WISDOM", "TRUST", "CONFUSION"]
  },
  {
    text: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.",
    reference: "Tiago 1:5",
    categories: ["WISDOM", "CONFUSION", "FAITH_CRISIS"]
  },
  {
    text: "E, se vos parecer mal aos vossos olhos servir ao Senhor, escolhei hoje a quem sirvais... porém eu e a minha casa serviremos ao Senhor.",
    reference: "Josué 24:15",
    categories: ["PURPOSE", "FAITH_CRISIS", "WISDOM"]
  },

  // Versículos para RELACIONAMENTOS
  {
    text: "Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
    reference: "Colossenses 3:13",
    categories: ["FORGIVENESS", "LOVE", "ANGER"]
  },
  {
    text: "Melhor é serem dois do que um, porque têm melhor paga do seu trabalho. Porque se um cair, o outro levanta o seu companheiro; mas ai do que estiver só; pois, caindo, não haverá outro que o levante.",
    reference: "Eclesiastes 4:9-10",
    categories: ["LOVE", "LONELINESS", "STRENGTH"]
  },
  {
    text: "O amigo ama em todo o tempo; e para a angústia nasce o irmão.",
    reference: "Provérbios 17:17",
    categories: ["LOVE", "FRIENDSHIP", "TRUST"]
  },

  // Versículos para MOMENTOS DE MUDANÇA
  {
    text: "Não te mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.",
    reference: "Josué 1:9",
    categories: ["STRENGTH", "FEAR", "CHANGE"]
  },
  {
    text: "Eis que faço uma coisa nova, e agora sairá à luz; porventura não a percebeis? Eis que porei um caminho no deserto, e rios no ermo.",
    reference: "Isaías 43:19",
    categories: ["HOPE", "CHANGE", "TRUST"]
  },
  {
    text: "Esquecendo-me das coisas que atrás ficam, e avançando para as que estão diante de mim, prossigo para o alvo, pelo prêmio da soberana vocação de Deus em Cristo Jesus.",
    reference: "Filipenses 3:13-14",
    categories: ["PURPOSE", "HOPE", "CHANGE"]
  },

  // Versículos para MOMENTOS DE ESPERA
  {
    text: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração; espera, pois, no Senhor.",
    reference: "Salmos 27:14",
    categories: ["PATIENCE", "TRUST", "HOPE"]
  },
  {
    text: "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
    reference: "Isaías 40:31",
    categories: ["PATIENCE", "STRENGTH", "HOPE"]
  },
  {
    text: "O Senhor não retarda a sua promessa, ainda que alguns a têm por tardia; mas é longânimo para conosco, não querendo que alguns se percam, senão que todos venham a arrepender-se.",
    reference: "2 Pedro 3:9",
    categories: ["PATIENCE", "TRUST", "FAITH_CRISIS"]
  },

  // Versículos para IDENTIDADE EM CRISTO
  {
    text: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne, vivo-a na fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim.",
    reference: "Gálatas 2:20",
    categories: ["IDENTITY", "FAITH_CRISIS", "PURPOSE"]
  },
  {
    text: "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.",
    reference: "1 Pedro 2:9",
    categories: ["IDENTITY", "PURPOSE", "HOPE"]
  },
  {
    text: "Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.",
    reference: "Efésios 2:10",
    categories: ["IDENTITY", "PURPOSE", "WISDOM"]
  },

  // Versículos para MOMENTOS DE ADORAÇÃO
  {
    text: "Entrai por suas portas com gratidão, e em seus átrios com louvor; louvai-o, e bendizei o seu nome.",
    reference: "Salmos 100:4",
    categories: ["GRATITUDE", "JOY", "WORSHIP"]
  },
  {
    text: "Cantai ao Senhor um cântico novo, porque ele tem feito maravilhas; a sua destra e o seu braço santo lhe alcançaram a vitória.",
    reference: "Salmos 98:1",
    categories: ["JOY", "WORSHIP", "GRATITUDE"]
  },
  {
    text: "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.",
    reference: "Filipenses 4:4",
    categories: ["JOY", "WORSHIP", "FAITH_CRISIS"]
  },

  // Versículos para MOMENTOS DE TENTAÇÃO
  {
    text: "Não veio sobre vós tentação, senão humana; mas fiel é Deus, que não vos deixará tentar acima do que podeis, antes com a tentação dará também o escape, para que a possais suportar.",
    reference: "1 Coríntios 10:13",
    categories: ["STRENGTH", "TEMPTATION", "TRUST"]
  },
  {
    text: "Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca.",
    reference: "Mateus 26:41",
    categories: ["TEMPTATION", "WISDOM", "STRENGTH"]
  },
  {
    text: "Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós.",
    reference: "Tiago 4:7",
    categories: ["TEMPTATION", "STRENGTH", "FAITH_CRISIS"]
  },

  // Versículos para MOMENTOS DE VITÓRIA
  {
    text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
    reference: "Romanos 8:37",
    categories: ["VICTORY", "STRENGTH", "HOPE"]
  },
  {
    text: "Graças a Deus, que nos dá a vitória por nosso Senhor Jesus Cristo.",
    reference: "1 Coríntios 15:57",
    categories: ["VICTORY", "GRATITUDE", "JOY"]
  },
  {
    text: "Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé.",
    reference: "1 João 5:4",
    categories: ["VICTORY", "FAITH_CRISIS", "STRENGTH"]
  },

  // Versículos para MOMENTOS DE INCERTEZA
  {
    text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
    categories: ["HOPE", "TRUST", "ANXIETY"]
  },
  {
    text: "Antes que te formasse no ventre te conheci, e antes que saísses da madre te santifiquei; às nações te dei por profeta.",
    reference: "Jeremias 1:5",
    categories: ["IDENTITY", "PURPOSE", "WORTH"]
  },
  {
    text: "O Senhor é quem vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes.",
    reference: "Deuteronômio 31:8",
    categories: ["TRUST", "FEAR", "STRENGTH"]
  },

  // Versículos para MOMENTOS DE RENOVAÇÃO
  {
    text: "De sorte que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.",
    reference: "2 Coríntios 5:17",
    categories: ["CHANGE", "HOPE", "IDENTITY"]
  },
  {
    text: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
    reference: "Romanos 12:2",
    categories: ["CHANGE", "WISDOM", "PURPOSE"]
  },
  {
    text: "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
    reference: "Isaías 40:31",
    categories: ["STRENGTH", "HOPE", "RENEWAL"]
  },

  // Versículos para MOMENTOS DE GRATIDÃO
  {
    text: "Entrai por suas portas com gratidão e em seus átrios com louvor; dai-lhe graças e bendizei o seu nome.",
    reference: "Salmos 100:4",
    categories: ["GRATITUDE", "WORSHIP", "JOY"]
  },
  {
    text: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    reference: "1 Tessalonicenses 5:18",
    categories: ["GRATITUDE", "PURPOSE", "TRUST"]
  },
  {
    text: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.",
    reference: "Salmos 103:2",
    categories: ["GRATITUDE", "WORSHIP", "MEMORY"]
  },

  // Versículos para MOMENTOS DE DECISÃO
  {
    text: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não censura, e ser-lhe-á dada.",
    reference: "Tiago 1:5",
    categories: ["WISDOM", "PRAYER", "TRUST"]
  },
  {
    text: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
    reference: "Salmos 37:5",
    categories: ["TRUST", "SURRENDER", "PEACE"]
  },
  {
    text: "Em seu coração o homem planeja o seu caminho, mas o Senhor lhe dirige os passos.",
    reference: "Provérbios 16:9",
    categories: ["WISDOM", "TRUST", "GUIDANCE"]
  },

  // Versículos para MOMENTOS DE ADORAÇÃO
  {
    text: "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos.",
    reference: "Filipenses 4:4",
    categories: ["JOY", "WORSHIP", "PEACE"]
  },
  {
    text: "Cantai ao Senhor um cântico novo, porque ele tem feito maravilhas; a sua destra e o seu braço santo lhe alcançaram a vitória.",
    reference: "Salmos 98:1",
    categories: ["WORSHIP", "VICTORY", "JOY"]
  },
  {
    text: "Mas vem a hora, e já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque são estes que o Pai procura para seus adoradores.",
    reference: "João 4:23",
    categories: ["WORSHIP", "TRUTH", "PURPOSE"]
  },

  // Versículos para MOMENTOS DE PERSEVERANÇA
  {
    text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
    reference: "Romanos 8:28",
    categories: ["TRUST", "PURPOSE", "HOPE"]
  },
  {
    text: "Considerai uma grande alegria, meus irmãos, quando passardes por diversas provações, sabendo que a prova da vossa fé produz perseverança.",
    reference: "Tiago 1:2-3",
    categories: ["STRENGTH", "GROWTH", "JOY"]
  },
  {
    text: "Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o Senhor, teu Deus, é contigo por onde quer que andares.",
    reference: "Josué 1:9",
    categories: ["STRENGTH", "COURAGE", "TRUST"]
  },

  // Versículos para MOMENTOS DE CURA
  {
    text: "Ele sara os quebrantados de coração e lhes cura as feridas.",
    reference: "Salmos 147:3",
    categories: ["HEALING", "COMFORT", "LOVE"]
  },
  {
    text: "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma.",
    reference: "Salmos 23:1-3",
    categories: ["PEACE", "HEALING", "REST"]
  },
  {
    text: "Mas para vós que temeis o meu nome nascerá o sol da justiça, e cura trará nas suas asas.",
    reference: "Malaquias 4:2",
    categories: ["HEALING", "HOPE", "PROMISE"]
  },

  // Versículos para MOMENTOS DE SABEDORIA
  {
    text: "O temor do Senhor é o princípio da sabedoria; bom entendimento têm todos os que cumprem os seus mandamentos.",
    reference: "Salmos 111:10",
    categories: ["WISDOM", "FEAR", "OBEDIENCE"]
  },
  {
    text: "Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento; porque melhor é o lucro que ela dá do que o da prata, e melhor a sua renda do que o ouro mais fino.",
    reference: "Provérbios 3:13-14",
    categories: ["WISDOM", "VALUE", "GROWTH"]
  },
  {
    text: "A sabedoria que vem do alto é, primeiramente, pura; depois, pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade e sem hipocrisia.",
    reference: "Tiago 3:17",
    categories: ["WISDOM", "PEACE", "CHARACTER"]
  },

  // Versículos para MOMENTOS DE CONFIANÇA
  {
    text: "Porque eu, o Senhor, teu Deus, te tomo pela tua mão direita e te digo: Não temas, eu te ajudo.",
    reference: "Isaías 41:13",
    categories: ["TRUST", "FEAR", "COMFORT"]
  },
  {
    text: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a fortaleza da minha vida; de quem me recearei?",
    reference: "Salmos 27:1",
    categories: ["TRUST", "STRENGTH", "COURAGE"]
  },
  {
    text: "Mas os que confiam no Senhor são como o monte Sião, que não se abala, mas permanece para sempre.",
    reference: "Salmos 125:1",
    categories: ["TRUST", "STABILITY", "FAITH"]
  },

  // Versículos para MOMENTOS DE ALEGRIA
  {
    text: "A alegria do Senhor é a vossa força.",
    reference: "Neemias 8:10",
    categories: ["JOY", "STRENGTH", "WORSHIP"]
  },
  {
    text: "Ao anoitecer pode vir o choro, mas a alegria vem pela manhã.",
    reference: "Salmos 30:5",
    categories: ["JOY", "HOPE", "CHANGE"]
  },
  {
    text: "Regozijai-vos sempre no Senhor; outra vez digo: regozijai-vos.",
    reference: "Filipenses 4:4",
    categories: ["JOY", "WORSHIP", "PEACE"]
  },

  // Versículos para MOMENTOS DE PAZ
  {
    text: "Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti.",
    reference: "Isaías 26:3",
    categories: ["PEACE", "TRUST", "MIND"]
  },
  {
    text: "A paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:7",
    categories: ["PEACE", "MIND", "PROTECTION"]
  },
  {
    text: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    reference: "João 14:27",
    categories: ["PEACE", "COMFORT", "FEAR"]
  }
];

// Citações de apoio de escritores cristãos
export interface Quote {
  text: string;
  author: string;
  categories: string[];
}

export const QUOTES_DATABASE: Quote[] = [
  {
    text: "Deus está sempre conosco em todos os momentos, mesmo quando não sentimos Sua presença.",
    author: "Max Lucado",
    categories: ["ANXIETY", "LONELINESS", "FAITH_CRISIS"]
  },
  {
    text: "A fé não elimina as perguntas. Mas a fé sabe onde levá-las.",
    author: "Timothy Keller",
    categories: ["FAITH_CRISIS", "CONFUSION"]
  },
  {
    text: "Deus sussurra em nossos prazeres, fala em nossa consciência, mas grita em nossas dores: é o seu megafone para despertar um mundo surdo.",
    author: "C.S. Lewis",
    categories: ["SADNESS", "PAIN"]
  },
  {
    text: "A oração não muda a Deus, mas muda quem ora.",
    author: "Søren Kierkegaard",
    categories: ["GENERAL", "FAITH_CRISIS"]
  },
  {
    text: "A alegria é a emoção mais séria do céu.",
    author: "C.S. Lewis",
    categories: ["JOY"]
  },
  {
    text: "Deus nunca disse que a jornada seria fácil, mas Ele disse que a chegada valeria a pena.",
    author: "Max Lucado",
    categories: ["HOPE", "SADNESS"]
  },
  {
    text: "A gratidão é a memória do coração.",
    author: "Jean Baptiste Massieu",
    categories: ["GRATITUDE"]
  },
  {
    text: "O amor é a arma mais poderosa que existe no mundo.",
    author: "Martin Luther King Jr.",
    categories: ["LOVE", "ANGER"]
  },
  {
    text: "Não é o quanto fazemos, mas quanto amor colocamos naquilo que fazemos. Não é o quanto damos, mas quanto amor colocamos em dar.",
    author: "Madre Teresa de Calcutá",
    categories: ["LOVE", "GENERAL"]
  },
  {
    text: "A paciência é a companheira da sabedoria.",
    author: "Santo Agostinho",
    categories: ["ANGER", "CONFUSION"]
  },
  {
    text: "A esperança é a âncora da alma, firme e segura.",
    author: "Billy Graham",
    categories: ["HOPE"]
  },
  {
    text: "Quando você não consegue entender o que Deus está fazendo, confie em quem Ele é.",
    author: "Rick Warren",
    categories: ["FAITH_CRISIS", "CONFUSION"]
  },
  {
    text: "A ansiedade nos faz olhar para o futuro com medo, mas a fé nos permite olhar para o futuro com esperança.",
    author: "Dr. Henry Cloud",
    categories: ["ANXIETY", "FAITH_CRISIS", "HOPE"]
  },
  {
    text: "O perdão não é um sentimento - é uma decisão. É uma escolha de mostrar misericórdia, não de guardar a ofensa.",
    author: "Dr. John Townsend",
    categories: ["FORGIVENESS", "ANGER"]
  },
  {
    text: "A cura emocional começa quando paramos de tentar controlar nossa dor e começamos a confiar no processo de Deus.",
    author: "Dr. Larry Crabb",
    categories: ["HEALING", "TRUST", "PAIN"]
  },
  {
    text: "Nossa identidade em Cristo é a base mais sólida para uma autoestima saudável.",
    author: "Dr. Neil T. Anderson",
    categories: ["PURPOSE", "FAITH_CRISIS"]
  },
  {
    text: "O medo perde seu poder quando enfrentamos o que tememos com a verdade da Palavra de Deus.",
    author: "Dr. Caroline Leaf",
    categories: ["FEAR", "FAITH_CRISIS"]
  },
  {
    text: "A paz não é a ausência de problemas, mas a presença de Deus em meio às dificuldades.",
    author: "Dr. Tim Clinton",
    categories: ["PEACE", "ANXIETY"]
  },
  {
    text: "A sabedoria espiritual nos ensina que às vezes o que parece ser uma crise de fé é na verdade um convite para um relacionamento mais profundo com Deus.",
    author: "Dr. Dan Allender",
    categories: ["WISDOM", "FAITH_CRISIS"]
  },
  {
    text: "O amor próprio baseado em Cristo não é egoísmo - é mordomia do presente que Deus nos deu.",
    author: "Dr. Gary Sibcy",
    categories: ["LOVE", "PURPOSE"]
  },
  {
    text: "A culpa pode ser um professor ou um torturador - a diferença está em como respondemos a ela diante de Deus.",
    author: "Dr. Arch Hart",
    categories: ["GUILT", "HEALING"]
  },
  {
    text: "A confiança em Deus não elimina o vale escuro, mas nos garante Sua presença enquanto o atravessamos.",
    author: "Dr. Leslie Vernick",
    categories: ["TRUST", "FAITH_CRISIS"]
  },
  {
    text: "A maior necessidade do ser humano não é ser feliz, mas ser santo. A felicidade vem como consequência.",
    author: "A.W. Tozer",
    categories: ["PURPOSE", "JOY"]
  },
  {
    text: "Deus não está procurando pessoas de grande fé, mas pessoas que confiarão em Seu grande amor por elas.",
    author: "Hudson Taylor",
    categories: ["TRUST", "LOVE"]
  },
  {
    text: "A oração não é preparação para a batalha. A oração é a batalha.",
    author: "John Piper",
    categories: ["STRENGTH", "FAITH_CRISIS"]
  },
  {
    text: "O evangelho não é um convite para receber Cristo como Salvador, mas para recebê-lo como Senhor.",
    author: "Paul Washer",
    categories: ["PURPOSE", "FAITH_CRISIS"]
  },
  {
    text: "O sofrimento nunca é desperdiçado quando confiamos em Deus.",
    author: "Charles Spurgeon",
    categories: ["SADNESS", "TRUST"]
  },
  {
    text: "A santidade não é a maneira de ganhar algo, mas a maneira de viver porque já recebemos tudo.",
    author: "Tullian Tchividjian",
    categories: ["PURPOSE", "GRATITUDE"]
  },
  {
    text: "O maior inimigo da fé é o medo, e o maior aliado do medo são as circunstâncias.",
    author: "R.C. Sproul",
    categories: ["FEAR", "FAITH_CRISIS"]
  },
  {
    text: "A graça não é apenas perdão de pecados, é poder para viver uma nova vida.",
    author: "John MacArthur",
    categories: ["FORGIVENESS", "STRENGTH"]
  },
  {
    text: "A sabedoria divina frequentemente se parece com tolice aos olhos do mundo.",
    author: "Martyn Lloyd-Jones",
    categories: ["WISDOM", "FAITH_CRISIS"]
  },
  {
    text: "O propósito da teologia não é satisfazer nossa curiosidade, mas transformar nosso caráter.",
    author: "D.A. Carson",
    categories: ["PURPOSE", "WISDOM"]
  },
  {
    text: "A fé vê o invisível, crê no incrível e recebe o impossível.",
    author: "Corrie Ten Boom",
    categories: ["FAITH_CRISIS", "HOPE", "TRUST"]
  },
  {
    text: "Às vezes Deus permite o que odeia para realizar o que ama.",
    author: "Joni Eareckson Tada",
    categories: ["TRUST", "PAIN", "FAITH_CRISIS"]
  },
  {
    text: "Quando você não consegue dar mais um passo, Deus não te pede dois.",
    author: "Joyce Meyer",
    categories: ["STRENGTH", "TRUST", "ANXIETY"]
  },
  {
    text: "O que você está vivendo não é maior do que a graça que está recebendo.",
    author: "Hernandes Dias Lopes",
    categories: ["HOPE", "STRENGTH", "FAITH_CRISIS"]
  },
  {
    text: "Você é mais do que suas lutas, mais do que suas falhas, mais do que suas conquistas. Você é amado por Deus.",
    author: "Christine Caine",
    categories: ["IDENTITY", "LOVE", "WORTH"]
  },
  {
    text: "Sua identidade não está no que você faz, mas em quem você é em Cristo.",
    author: "John Piper",
    categories: ["IDENTITY", "PURPOSE", "FAITH_CRISIS"]
  },
  {
    text: "Deus não chama os capacitados, Ele capacita os chamados.",
    author: "Rick Warren",
    categories: ["PURPOSE", "STRENGTH", "TRUST"]
  },
  {
    text: "Você nunca é inútil demais para ser usado por Deus.",
    author: "Charles Spurgeon",
    categories: ["PURPOSE", "WORTH", "HOPE"]
  },
  {
    text: "A mudança é dolorosa, mas nada é tão doloroso quanto ficar preso onde você não pertence.",
    author: "Beth Moore",
    categories: ["CHANGE", "GROWTH", "HOPE"]
  },
  {
    text: "Às vezes os maiores momentos de crescimento vêm dos momentos mais difíceis de espera.",
    author: "Lysa TerKeurst",
    categories: ["PATIENCE", "GROWTH", "TRUST"]
  },
  {
    text: "Deus está mais interessado em mudar seu coração do que em mudar suas circunstâncias.",
    author: "Paul David Tripp",
    categories: ["CHANGE", "GROWTH", "FAITH_CRISIS"]
  },
  {
    text: "O crescimento espiritual não é tentar ser mais forte, mas admitir nossa fraqueza e conhecer mais a força de Deus.",
    author: "Timothy Keller",
    categories: ["GROWTH", "STRENGTH", "FAITH_CRISIS"]
  },
  {
    text: "A paz não é a ausência de problemas, mas a presença de Cristo.",
    author: "Sheila Walsh",
    categories: ["PEACE", "ANXIETY", "TRUST"]
  },
  {
    text: "Descanse na certeza de que Deus nunca desperdiça uma experiência.",
    author: "Charles Stanley",
    categories: ["PEACE", "TRUST", "PURPOSE"]
  },
  {
    text: "Quando a ansiedade bate à porta, deixe a fé atender.",
    author: "Max Lucado",
    categories: ["ANXIETY", "FAITH_CRISIS", "PEACE"]
  },
  {
    text: "O descanso verdadeiro não é a ausência de atividade, mas a presença de Deus.",
    author: "Ann Voskamp",
    categories: ["PEACE", "REST", "TRUST"]
  },
  {
    text: "Suas circunstâncias são a plataforma de Deus para um milagre.",
    author: "T.D. Jakes",
    categories: ["VICTORY", "HOPE", "FAITH_CRISIS"]
  },
  {
    text: "A derrota pode servir como um trampolim para a vitória.",
    author: "A.W. Tozer",
    categories: ["VICTORY", "HOPE", "STRENGTH"]
  },
  {
    text: "Não é o tamanho da sua fé que importa, mas o tamanho do seu Deus.",
    author: "Mark Batterson",
    categories: ["FAITH_CRISIS", "TRUST", "VICTORY"]
  },
  {
    text: "Sua história de superação pode ser o capítulo de esperança no livro da vida de alguém.",
    author: "Steven Furtick",
    categories: ["VICTORY", "HOPE", "PURPOSE"]
  },
  {
    text: "O amor de Deus não é baseado em nosso desempenho, mas em Seu caráter.",
    author: "David Jeremiah",
    categories: ["LOVE", "WORTH", "IDENTITY"]
  },
  {
    text: "O perdão é libertar um prisioneiro e descobrir que o prisioneiro era você.",
    author: "Lewis B. Smedes",
    categories: ["FORGIVENESS", "HEALING", "LOVE"]
  },
  {
    text: "Amar como Cristo é escolher amar especialmente quando não sentimos vontade.",
    author: "Gary Chapman",
    categories: ["LOVE", "STRENGTH", "RELATIONSHIPS"]
  },
  {
    text: "O amor não é um sentimento a ser mantido, mas um compromisso a ser cumprido.",
    author: "Elisabeth Elliot",
    categories: ["LOVE", "COMMITMENT", "RELATIONSHIPS"]
  },
  {
    text: "A sabedoria não é apenas conhecer a verdade, mas viver a verdade que conhecemos.",
    author: "Ravi Zacharias",
    categories: ["WISDOM", "PURPOSE", "GROWTH"]
  },
  {
    text: "Às vezes Deus permite perguntas sem resposta para nos ensinar a confiar sem entender.",
    author: "Charles Swindoll",
    categories: ["WISDOM", "TRUST", "FAITH_CRISIS"]
  },
  {
    text: "A maior sabedoria é saber que precisamos de mais sabedoria.",
    author: "Chuck Swindoll",
    categories: ["WISDOM", "HUMILITY", "GROWTH"]
  },
  {
    text: "O discernimento não é saber a diferença entre certo e errado, é saber a diferença entre certo e quase certo.",
    author: "Charles Spurgeon",
    categories: ["WISDOM", "CONFUSION", "FAITH_CRISIS"]
  }
];

// Interface para dicas práticas
export interface Tip {
  text: string;
  categories: string[];
}

export const TIPS_DATABASE: Tip[] = [
  {
    text: "Pratique a respiração profunda e consciente enquanto medita em um versículo bíblico sobre paz ou confiança.",
    categories: ["ANXIETY", "PEACE"]
  },
  {
    text: "Mantenha um diário de gratidão, anotando pelo menos 3 bênçãos diárias, por menores que pareçam.",
    categories: ["GRATITUDE", "JOY"]
  },
  {
    text: "Quando se sentir sobrecarregado, faça uma pausa para orar e entregar suas preocupações a Deus.",
    categories: ["ANXIETY", "TRUST"]
  },
  {
    text: "Busque aconselhamento pastoral ou profissional quando necessário - isso não é sinal de fraqueza, mas de sabedoria.",
    categories: ["HEALING", "WISDOM"]
  },
  {
    text: "Estabeleça uma rotina diária de leitura bíblica e oração, mesmo que seja por apenas 10 minutos.",
    categories: ["FAITH_CRISIS", "STRENGTH"]
  },
  {
    text: "Ao sentir raiva, pratique contar até 10 e fazer uma breve oração antes de reagir.",
    categories: ["ANGER", "PEACE"]
  },
  {
    text: "Cultive amizades cristãs saudáveis que possam oferecer apoio espiritual e emocional.",
    categories: ["LONELINESS", "HEALING"]
  },
  {
    text: "Quando estiver triste, permita-se expressar suas emoções a Deus através de orações honestas e sinceras.",
    categories: ["SADNESS", "HEALING"]
  },
  {
    text: "Pratique o perdão como uma decisão consciente, mesmo quando os sentimentos ainda não acompanham.",
    categories: ["FORGIVENESS", "HEALING"]
  },
  {
    text: "Identifique pensamentos negativos e substitua-os por verdades bíblicas específicas.",
    categories: ["FEAR", "FAITH_CRISIS"]
  },
  {
    text: "Estabeleça limites saudáveis em seus relacionamentos, baseados em princípios bíblicos.",
    categories: ["WISDOM", "STRENGTH"]
  },
  {
    text: "Quando se sentir culpado, pratique a confissão específica e aceite o perdão de Deus.",
    categories: ["GUILT", "FORGIVENESS"]
  },
  {
    text: "Desenvolva um plano de ação prático para momentos de dúvida, incluindo versículos-âncora e pessoas de confiança para contatar.",
    categories: ["DOUBT", "FAITH_CRISIS"]
  },
  {
    text: "Reserve momentos regulares para silêncio e reflexão, permitindo que Deus fale ao seu coração.",
    categories: ["PEACE", "WISDOM"]
  },
  {
    text: "Encontre maneiras práticas de servir aos outros - o serviço frequentemente nos ajuda a encontrar propósito.",
    categories: ["PURPOSE", "JOY"]
  },
  {
    text: "Crie um 'cantinho de paz' em sua casa para momentos de oração e meditação na Palavra.",
    categories: ["PEACE", "ANXIETY"]
  },
  {
    text: "Escreva suas preocupações em um papel e ore sobre cada uma delas, entregando-as a Deus.",
    categories: ["ANXIETY", "TRUST"]
  },
  {
    text: "Memorize versículos específicos para combater pensamentos de medo e ansiedade.",
    categories: ["FEAR", "FAITH_CRISIS"]
  },
  {
    text: "Mantenha um 'diário de vitórias' onde você registra as respostas de Deus às suas orações.",
    categories: ["TRUST", "FAITH_CRISIS"]
  },
  {
    text: "Antes de dormir, faça uma lista de três momentos do dia em que você viu a mão de Deus.",
    categories: ["GRATITUDE", "TRUST"]
  },
  {
    text: "Participe ativamente de um grupo de estudo bíblico ou discipulado para fortalecer sua fé.",
    categories: ["WISDOM", "FAITH_CRISIS"]
  },
  {
    text: "Quando se sentir culpado, escreva uma carta a Deus expressando seu arrependimento e recebendo Seu perdão.",
    categories: ["GUILT", "HEALING"]
  },
  {
    text: "Crie um plano de ação espiritual com seu pastor ou mentor para momentos de crise de fé.",
    categories: ["FAITH_CRISIS", "WISDOM"]
  },
  {
    text: "Desenvolva um ritual matinal de gratidão e louvor antes de começar seu dia.",
    categories: ["JOY", "PEACE"]
  },
  {
    text: "Encontre um ministério ou projeto social para servir - ajudar outros frequentemente traz propósito e cura.",
    categories: ["PURPOSE", "HEALING"]
  },
  {
    text: "Faça uma lista de seus dons e talentos, e ore sobre como usá-los para o Reino de Deus.",
    categories: ["PURPOSE", "WISDOM"]
  },
  {
    text: "Pratique exercícios de respiração enquanto medita em versículos sobre a paz de Deus.",
    categories: ["PEACE", "ANXIETY"]
  },
  {
    text: "Crie um 'mural da fé' com versículos, promessas e testemunhos de Deus em sua vida.",
    categories: ["FAITH_CRISIS", "HOPE"]
  },
  {
    text: "Estabeleça momentos regulares de 'detox digital' para focar em sua conexão com Deus.",
    categories: ["PEACE", "WISDOM"]
  },
  {
    text: "Mantenha um diário de orações respondidas para fortalecer sua fé em momentos difíceis.",
    categories: ["TRUST", "DOUBT"]
  },
  {
    text: "Desenvolva uma playlist de louvor específica para diferentes estados emocionais.",
    categories: ["JOY", "SADNESS"]
  },
  {
    text: "Pratique a técnica 'PARE': Pare, Analise, Reflita, Entregue a Deus.",
    categories: ["ANXIETY", "WISDOM"]
  },
  {
    text: "Escreva cartas de perdão (mesmo que não as envie) para liberar ressentimentos.",
    categories: ["FORGIVENESS", "HEALING"]
  },
  {
    text: "Crie um 'plano de emergência espiritual' com versículos, contatos e ações para momentos de crise.",
    categories: ["FAITH_CRISIS", "STRENGTH"]
  },
  {
    text: "Estabeleça uma rotina de autocuidado espiritual que inclua oração, leitura bíblica e momentos de silêncio.",
    categories: ["HEALING", "WISDOM"]
  },
  {
    text: "Crie um 'diário de gratidão espiritual' onde você registra experiências diárias com Deus e lições aprendidas.",
    categories: ["GROWTH", "GRATITUDE", "WISDOM"]
  },
  {
    text: "Estabeleça um 'tempo de qualidade' diário com Deus, mesmo que seja curto, mas seja consistente.",
    categories: ["GROWTH", "FAITH_CRISIS", "WORSHIP"]
  },
  {
    text: "Encontre um mentor espiritual ou parceiro de oração para compartilhar sua jornada de fé.",
    categories: ["GROWTH", "FRIENDSHIP", "WISDOM"]
  },
  {
    text: "Crie uma playlist de louvor personalizada para diferentes momentos do seu dia.",
    categories: ["WORSHIP", "JOY", "PEACE"]
  },
  {
    text: "Pratique a técnica 4-7-8: inspire por 4 segundos, segure por 7, expire por 8, enquanto medita em um versículo.",
    categories: ["ANXIETY", "PEACE", "WISDOM"]
  },
  {
    text: "Crie cartões com versículos específicos para ansiedade e os mantenha sempre à mão.",
    categories: ["ANXIETY", "FAITH_CRISIS", "PEACE"]
  },
  {
    text: "Estabeleça limites saudáveis com mídias sociais e notícias que podem aumentar sua ansiedade.",
    categories: ["ANXIETY", "PEACE", "WISDOM"]
  },
  {
    text: "Desenvolva uma rotina noturna relaxante que inclua oração e gratidão.",
    categories: ["ANXIETY", "PEACE", "REST"]
  },
  {
    text: "Pratique a arte de ouvir ativamente, sem interromper ou julgar, como Jesus fazia.",
    categories: ["RELATIONSHIPS", "LOVE", "WISDOM"]
  },
  {
    text: "Antes de responder em conflitos, faça uma pausa para orar e buscar a perspectiva de Deus.",
    categories: ["RELATIONSHIPS", "PEACE", "WISDOM"]
  },
  {
    text: "Estabeleça um tempo regular para cultivar amizades cristãs significativas.",
    categories: ["RELATIONSHIPS", "FRIENDSHIP", "GROWTH"]
  },
  {
    text: "Pratique atos intencionais de bondade, mesmo com pessoas difíceis.",
    categories: ["RELATIONSHIPS", "LOVE", "STRENGTH"]
  },
  {
    text: "Mantenha um diário das promessas de Deus para tempos de transição.",
    categories: ["CHANGE", "TRUST", "HOPE"]
  },
  {
    text: "Crie uma lista de 'âncoras espirituais' - verdades imutáveis para se apoiar durante mudanças.",
    categories: ["CHANGE", "FAITH_CRISIS", "TRUST"]
  },
  {
    text: "Estabeleça pequenas rotinas diárias que te ajudem a manter estabilidade em meio a mudanças.",
    categories: ["CHANGE", "PEACE", "WISDOM"]
  },
  {
    text: "Encontre maneiras de servir aos outros mesmo durante seus próprios períodos de transição.",
    categories: ["CHANGE", "PURPOSE", "GROWTH"]
  },
  {
    text: "Escreva e declare diariamente verdades bíblicas sobre sua identidade em Cristo.",
    categories: ["IDENTITY", "WORTH", "FAITH_CRISIS"]
  },
  {
    text: "Crie um 'mural de identidade' com versículos e promessas sobre quem você é em Cristo.",
    categories: ["IDENTITY", "WORTH", "HOPE"]
  },
  {
    text: "Pratique substituir pensamentos negativos por verdades bíblicas sobre sua identidade.",
    categories: ["IDENTITY", "HEALING", "WISDOM"]
  },
  {
    text: "Mantenha um registro de como Deus tem sido fiel em sua vida para fortalecer sua identidade Nele.",
    categories: ["IDENTITY", "GRATITUDE", "TRUST"]
  },
  {
    text: "Desenvolva uma 'estratégia de batalha espiritual' personalizada com versículos e orações específicas.",
    categories: ["VICTORY", "STRENGTH", "FAITH_CRISIS"]
  },
  {
    text: "Celebre pequenas vitórias diárias e mantenha um registro delas.",
    categories: ["VICTORY", "JOY", "GRATITUDE"]
  },
  {
    text: "Crie uma rede de apoio para compartilhar tanto lutas quanto vitórias.",
    categories: ["VICTORY", "FRIENDSHIP", "STRENGTH"]
  },
  {
    text: "Estabeleça metas espirituais realistas e celebre seu progresso.",
    categories: ["VICTORY", "GROWTH", "PURPOSE"]
  },
  {
    text: "Antes de decisões importantes, dedique um tempo específico para jejum e oração.",
    categories: ["WISDOM", "TRUST", "FAITH_CRISIS"]
  },
  {
    text: "Mantenha um diário de 'lições aprendidas' para crescer em sabedoria.",
    categories: ["WISDOM", "GROWTH", "LEARNING"]
  },
  {
    text: "Busque conselhos de pessoas maduras na fé antes de tomar decisões significativas.",
    categories: ["WISDOM", "RELATIONSHIPS", "TRUST"]
  },
  {
    text: "Desenvolva o hábito de refletir diariamente sobre como aplicar a Palavra em situações práticas.",
    categories: ["WISDOM", "GROWTH", "PURPOSE"]
  }
];

/**
 * Interface para controle de sessão do usuário
 */
interface SessionControl {
  recentVerses: string[];
  recentQuotes: string[];
  recentTips: string[];
}

/**
 * Gerencia o controle de sessão no localStorage
 */
const SESSION_KEY = 'amigosDeDeus_session';

function getSession(): SessionControl {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : {
      recentVerses: [],
      recentQuotes: [],
      recentTips: []
    };
  } catch {
    return {
      recentVerses: [],
      recentQuotes: [],
      recentTips: []
    };
  }
}

function updateSession(session: SessionControl) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.warn('Erro ao salvar sessão:', error);
  }
}

function addRecentItem(type: 'verses' | 'quotes' | 'tips', item: string) {
  const session = getSession();
  const key = `recent${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof SessionControl;
  const list = session[key] as string[];
  
  list.push(item);
  if (list.length > 10) { // Mantém apenas os 10 mais recentes
    list.shift();
  }
  
  updateSession(session);
}

/**
 * Detecta categorias de sentimentos no texto com pesos
 * @param text Texto para analisar
 * @returns Array de categorias detectadas ordenadas por relevância
 */
export function detectFeelingCategories(text: string): string[] {
  const lowerText = text.toLowerCase();
  const categoriesWithWeights: { category: string; weight: number }[] = [];
  
  Object.entries(FEELING_CATEGORIES).forEach(([category, keywords]) => {
    let weight = 0;
    keywords.forEach(keyword => {
      // Conta quantas vezes a palavra-chave aparece
      const regex = new RegExp(keyword, 'g');
      const matches = (lowerText.match(regex) || []).length;
      
      // Palavras no início da frase têm mais peso
      if (lowerText.startsWith(keyword)) {
        weight += matches * 2;
      } else {
        weight += matches;
      }
      
      // Palavras compostas têm mais peso
      if (keyword.includes(' ')) {
        weight += matches;
      }
    });
    
    if (weight > 0) {
      categoriesWithWeights.push({ category, weight });
    }
  });
  
  // Ordena categorias por peso e retorna apenas as categorias
  const sortedCategories = categoriesWithWeights
    .sort((a, b) => b.weight - a.weight)
    .map(item => item.category);
    
  return sortedCategories.length > 0 ? sortedCategories : ['GENERAL'];
}

/**
 * Obtém um versículo aleatório do banco de dados
 * @returns Versículo com referência
 */
export function getRandomVerse(): string {
  const randomIndex = Math.floor(Math.random() * VERSES_DATABASE.length);
  const verse = VERSES_DATABASE[randomIndex];
  return `${verse.text} (${verse.reference})`;
}

/**
 * Obtém um versículo relevante para as categorias de sentimentos detectadas
 * @param categories Categorias de sentimentos
 * @returns Versículo com referência
 */
export function getVerseByCategories(categories: string[]): string {
  const session = getSession();
  
  // Filtra os versículos que correspondem às categorias
  let matchingVerses = VERSES_DATABASE.filter(verse =>
    verse.categories.some(category => categories.includes(category))
  );

  // Remove versículos recentemente usados
  matchingVerses = matchingVerses.filter(verse => 
    !session.recentVerses.includes(verse.reference)
  );

  // Se não houver versículos disponíveis após filtrar os recentes,
  // limpa o histórico e usa todos os versículos correspondentes
  if (matchingVerses.length === 0) {
    session.recentVerses = [];
    updateSession(session);
    matchingVerses = VERSES_DATABASE.filter(verse =>
      verse.categories.some(category => categories.includes(category))
    );
  }

  // Ajusta a relevância dos versículos com base nas categorias
  matchingVerses = adjustRelevance(matchingVerses, categories, 'verse');

  // Seleciona um versículo aleatório dentre os mais relevantes (top 30%)
  const topCount = Math.max(1, Math.ceil(matchingVerses.length * 0.3));
  const topVerses = matchingVerses.slice(0, topCount);
  const selectedVerse = topVerses[Math.floor(Math.random() * topVerses.length)];

  // Adiciona o versículo selecionado ao histórico recente
  addRecentItem('verses', selectedVerse.reference);

  return `${selectedVerse.text} (${selectedVerse.reference})`;
}

/**
 * Obtém uma citação relevante para as categorias de sentimentos detectadas
 * @param categories Categorias de sentimentos
 * @returns Citação com autor
 */
export function getQuoteByCategories(categories: string[]): string {
  const matchingQuotes = QUOTES_DATABASE.filter(quote => 
    quote.categories.some(category => categories.includes(category))
  );
  
  if (matchingQuotes.length === 0) {
    const randomIndex = Math.floor(Math.random() * QUOTES_DATABASE.length);
    const quote = QUOTES_DATABASE[randomIndex];
    addRecentItem('quotes', quote.author);
    return `${quote.text} - ${quote.author}`;
  }
  
  // Aplica sistema de aprendizado para ajustar relevância
  const sortedQuotes = adjustRelevance(matchingQuotes, categories, 'quote');
  
  // Filtra citações recentes
  const session = getSession();
  let availableQuotes = sortedQuotes.filter(quote => 
    !session.recentQuotes.includes(quote.author)
  );
  
  // Se todas as citações já foram mostradas, limpa o histórico
  if (availableQuotes.length === 0) {
    session.recentQuotes = [];
    updateSession(session);
    availableQuotes = sortedQuotes;
  }
  
  // Seleciona uma das citações mais relevantes
  const topQuotes = availableQuotes.slice(0, 3);
  const randomIndex = Math.floor(Math.random() * topQuotes.length);
  const quote = topQuotes[randomIndex];
  
  // Registra a citação usada
  addRecentItem('quotes', quote.author);
  
  return `${quote.text} - ${quote.author}`;
}

/**
 * Obtém dicas relevantes para as categorias de sentimentos detectadas
 * @param categories Categorias de sentimentos
 * @param count Número de dicas a retornar
 * @returns Array de dicas
 */
export function getTipsByCategories(categories: string[], count: number = 3): string[] {
  const matchingTips = TIPS_DATABASE.filter(tip => 
    tip.categories.some(category => categories.includes(category))
  );
  
  // Aplica sistema de aprendizado para ajustar relevância
  const sortedTips = adjustRelevance(matchingTips, categories, 'tip');
  
  // Filtra dicas recentes
  const session = getSession();
  let availableTips = sortedTips.filter(tip => 
    !session.recentTips.includes(tip.text)
  );
  
  // Se não houver dicas suficientes, inclui dicas gerais
  if (availableTips.length < count) {
    const generalTips = TIPS_DATABASE.filter(tip => 
      tip.categories.includes('GENERAL') && 
      !session.recentTips.includes(tip.text)
    );
    
    availableTips = [...availableTips, ...generalTips];
  }
  
  // Se ainda não houver dicas suficientes, limpa o histórico
  if (availableTips.length < count) {
    session.recentTips = [];
    updateSession(session);
    availableTips = sortedTips;
  }
  
  // Seleciona as dicas mais relevantes
  const selectedTips = availableTips.slice(0, count);
  
  // Registra as dicas usadas
  selectedTips.forEach(tip => addRecentItem('tips', tip.text));
  
  return selectedTips.map(tip => tip.text);
}

// Interface para manter compatibilidade com o código existente
export interface AIResponse {
  verse: string;
  support: string;
  tips: string[];
  categories: string[]; // Adicionado para feedback
  verseRef: string;    // Adicionado para feedback
  quoteAuthor: string; // Adicionado para feedback
  tipIds: string[];    // Adicionado para feedback
}

/**
 * Obtém orientação personalizada com base nos sentimentos do usuário
 * @param feeling Texto descrevendo os sentimentos do usuário
 * @returns Objeto com versículo, citação de apoio, dicas práticas e metadados para feedback
 */
export function getPersonalizedGuidance(feeling: string): AIResponse {
  try {
    // Detecta categorias de sentimentos no texto
    const categories = detectFeelingCategories(feeling);
    
    // Obtém um versículo relevante
    const verse = getVerseByCategories(categories);
    const verseRef = verse.match(/\((.*?)\)$/)?.[1] || '';
    
    // Obtém uma citação relevante
    const support = getQuoteByCategories(categories);
    const quoteAuthor = support.split(' - ')?.[1] || '';
    
    // Obtém dicas práticas
    const tips = getTipsByCategories(categories, 3);
    
    return {
      verse,
      support,
      tips,
      // Metadados para feedback
      categories,
      verseRef,
      quoteAuthor,
      tipIds: tips
    };
  } catch (error) {
    console.error('Error generating personalized guidance:', error);
    return {
      verse: "Filipenses 4:6-7 - Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
      support: "Deus está sempre conosco em todos os momentos, mesmo quando não sentimos Sua presença. - Max Lucado",
      tips: [
        "Faça uma pausa para respirar profundamente",
        "Dedique um momento para oração",
        "Escreva seus sentimentos em um diário"
      ],
      categories: ['ANXIETY'],
      verseRef: "Filipenses 4:6-7",
      quoteAuthor: "Max Lucado",
      tipIds: [
        "Faça uma pausa para respirar profundamente",
        "Dedique um momento para oração",
        "Escreva seus sentimentos em um diário"
      ]
    };
  }
}

// Interfaces para o sistema de aprendizado
export interface UserFeedback {
  verseRef: string;
  quoteAuthor: string;
  tipId: string;
  sentiment: string[];
  rating: number; // 1-5
  helpful: boolean;
  timestamp: number;
}

export interface LearningMetrics {
  categoryCorrelations: {[key: string]: {[key: string]: number}};
  verseEffectiveness: {[key: string]: number};
  quoteEffectiveness: {[key: string]: number};
  tipEffectiveness: {[key: string]: number};
}

export interface UserProfile {
  id: string;
  preferences: {[key: string]: number};
  history: UserFeedback[];
  learningMetrics: LearningMetrics;
}

// Chaves para armazenamento
const LEARNING_DATA_KEY = 'amigosDeDeus_learning';
const USER_PROFILE_KEY = 'amigosDeDeus_userProfile';

/**
 * Gerencia o sistema de aprendizado
 */
function getLearningData(): LearningMetrics {
  try {
    const data = localStorage.getItem(LEARNING_DATA_KEY);
    return data ? JSON.parse(data) : {
      categoryCorrelations: {},
      verseEffectiveness: {},
      quoteEffectiveness: {},
      tipEffectiveness: {}
    };
  } catch {
    return {
      categoryCorrelations: {},
      verseEffectiveness: {},
      quoteEffectiveness: {},
      tipEffectiveness: {}
    };
  }
}

function getUserProfile(): UserProfile {
  try {
    const profile = localStorage.getItem(USER_PROFILE_KEY);
    if (profile) {
      return JSON.parse(profile);
    }
  } catch {}
  
  // Cria novo perfil se não existir
  const newProfile: UserProfile = {
    id: Math.random().toString(36).substring(2),
    preferences: {},
    history: [],
    learningMetrics: getLearningData()
  };
  
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(newProfile));
  } catch (error) {
    console.warn('Erro ao salvar perfil:', error);
  }
  
  return newProfile;
}

function updateLearningMetrics(feedback: UserFeedback) {
  const learningData = getLearningData();
  const profile = getUserProfile();
  
  // Atualiza correlações entre categorias
  feedback.sentiment.forEach(cat1 => {
    if (!learningData.categoryCorrelations[cat1]) {
      learningData.categoryCorrelations[cat1] = {};
    }
    
    feedback.sentiment.forEach(cat2 => {
      if (cat1 !== cat2) {
        learningData.categoryCorrelations[cat1][cat2] = 
          (learningData.categoryCorrelations[cat1][cat2] || 0) + (feedback.helpful ? 1 : -0.5);
      }
    });
  });
  
  // Atualiza efetividade dos conteúdos
  const effectiveness = feedback.helpful ? 1 : -0.5;
  learningData.verseEffectiveness[feedback.verseRef] = 
    (learningData.verseEffectiveness[feedback.verseRef] || 0) + effectiveness;
  learningData.quoteEffectiveness[feedback.quoteAuthor] = 
    (learningData.quoteEffectiveness[feedback.quoteAuthor] || 0) + effectiveness;
  learningData.tipEffectiveness[feedback.tipId] = 
    (learningData.tipEffectiveness[feedback.tipId] || 0) + effectiveness;
  
  // Atualiza preferências do usuário
  feedback.sentiment.forEach(category => {
    profile.preferences[category] = 
      (profile.preferences[category] || 0) + (feedback.helpful ? 1 : -0.5);
  });
  
  // Adiciona ao histórico
  profile.history.push(feedback);
  if (profile.history.length > 100) {
    profile.history.shift(); // Mantém apenas os 100 mais recentes
  }
  
  // Atualiza métricas de aprendizado do perfil
  profile.learningMetrics = learningData;
  
  try {
    localStorage.setItem(LEARNING_DATA_KEY, JSON.stringify(learningData));
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.warn('Erro ao salvar dados de aprendizado:', error);
  }
}

/**
 * Ajusta a relevância dos conteúdos com base no aprendizado
 */
function adjustRelevance(items: Array<any>, categories: string[], type: 'verse' | 'quote' | 'tip'): Array<any> {
  const learningData = getLearningData();
  const profile = getUserProfile();
  
  return items.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    
    // Pontuação baseada na efetividade histórica
    if (type === 'verse') {
      scoreA += learningData.verseEffectiveness[a.reference] || 0;
      scoreB += learningData.verseEffectiveness[b.reference] || 0;
    } else if (type === 'quote') {
      scoreA += learningData.quoteEffectiveness[a.author] || 0;
      scoreB += learningData.quoteEffectiveness[b.author] || 0;
    } else {
      scoreA += learningData.tipEffectiveness[a.text] || 0;
      scoreB += learningData.tipEffectiveness[b.text] || 0;
    }
    
    // Pontuação baseada nas correlações de categoria
    categories.forEach(mainCat => {
      a.categories.forEach(itemCat => {
        if (learningData.categoryCorrelations[mainCat]?.[itemCat]) {
          scoreA += learningData.categoryCorrelations[mainCat][itemCat];
        }
      });
      
      b.categories.forEach(itemCat => {
        if (learningData.categoryCorrelations[mainCat]?.[itemCat]) {
          scoreB += learningData.categoryCorrelations[mainCat][itemCat];
        }
      });
    });
    
    // Pontuação baseada nas preferências do usuário
    a.categories.forEach(cat => {
      scoreA += profile.preferences[cat] || 0;
    });
    
    b.categories.forEach(cat => {
      scoreB += profile.preferences[cat] || 0;
    });
    
    return scoreB - scoreA;
  });
}

/**
 * Registra feedback do usuário sobre o conteúdo recebido
 */
export function provideFeedback(
  verseRef: string,
  quoteAuthor: string,
  tipId: string,
  sentiment: string[],
  rating: number,
  helpful: boolean
) {
  const feedback: UserFeedback = {
    verseRef,
    quoteAuthor,
    tipId,
    sentiment,
    rating,
    helpful,
    timestamp: Date.now()
  };
  
  updateLearningMetrics(feedback);
}