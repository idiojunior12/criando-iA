const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua escola decidiu lançar um assistente virtual com IA para tirar dúvidas sobre as matérias 24 horas por dia. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Incrível! Vou conseguir tirar minhas dúvidas nos estudos a qualquer hora, sem depender do horário das aulas.",
                afirmacao: "Aproveitou o assistente virtual desde o início para potencializar seus estudos de forma independente."
            },
            {
                texto: "Fico com receio de o robô dar respostas erradas ou de perdermos o contato direto com os professores.",
                afirmacao: "Manteve o cuidado ao usar tecnologias novas, priorizando sempre a validação humana nos estudos."
            }
        ]
    },
    {
        enunciado: "Em uma aula de artes, o professor propõe a criação de uma exposição. Um colega sugere usar uma IA geradora de imagens para criar todas as obras em instantes. Como você reage?",
        alternativas: [
            {
                texto: "Concorda e sugere aprender a criar os melhores comandos (prompts) para produzir artes visuais impactantes.",
                afirmacao: "Passou a dominar a engenharia de prompts e a explorar a criatividade através do ecossistema generativo."
            },
            {
                texto: "Prefere que o grupo faça ilustrações próprias e discuta o impacto do uso de artes de IA na vida dos artistas humanos.",
                afirmacao: "Defendeu a valorização dos artistas e a discussão sobre os limites do uso de IA nas artes."
            }
        ]
    },
    {
        enunciado: "Você descobre um vídeo nas redes sociais onde o diretor da sua escola parece estar cancelando as férias, mas percebe sinais de que é um áudio e vídeo gerados por IA (deepfake). O que você faz?",
        alternativas: [
            {
                texto: "Alerta seus colegas de que o vídeo é falso e ensina a turma a identificar sinais de manipulação por IA.",
                afirmacao: "Tornou-se uma referência em checagem de fatos e combate à desinformação no ambiente digital."
            },
            {
                texto: "Apenas ignora a publicação e aguarda um comunicado oficial emitido pelos canais da própria escola.",
                afirmacao: "Manteve uma postura prudente, evitando espalhar boatos e buscando sempre fontes oficiais de informação."
            }
        ]
    },
    {
        enunciado: "Sua turma precisa desenvolver um projeto para a feira de ciências sobre o futuro do trabalho. Você escolhe focar em qual área da IA?",
        alternativas: [
            {
                texto: "Em como a IA e a automação podem assumir tarefas repetitivas e criar novas profissões focadas em tecnologia.",
                afirmacao: "Passou a focar na capacitação técnica para as novas carreiras que surgem com a evolução tecnológica."
            },
            {
                texto: "Em como garantir que os robôs e algoritmos sejam programados com ética, sem preconceitos e respeitando a privacidade.",
                afirmacao: "Dedicou-se aos estudos de ética em tecnologia, garantindo que o avanço da IA seja seguro para a sociedade."
            }
        ]
    },
    {
        enunciado: "Para o encerramento do projeto, você precisa decidir como vai organizar sua rotina diária em um mundo cercado de Inteligências Artificiais. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Delegar ao máximo as tarefas cotidianas para as ferramentas de IA ganharem tempo e produtividade.",
                afirmacao: "Adotou a IA como sua principal aliada de produtividade, otimizando o tempo em quase todas as tarefas do dia a dia."
            },
            {
                texto: "Usar a IA apenas como apoio pontual, garantindo que suas habilidades de pensamento crítico e raciocínio continuem afiadas.",
                afirmacao: "Conseguiu equilibrar o uso das tecnologias com o desenvolvimento contínuo da sua própria mente e criatividade."
            }
        ]
    }
];

