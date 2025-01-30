import './index.css';

const About = () => {
  return (
    <div id='about' className='flex flex-col w-1/2 justify-self-center about-card my-20'>
      <h3 className='font-bold'>Olá!🖐</h3>
      <p className=''>
        Me chamo <span>Valmir Thume Junior</span>, também conhecido como <i>Junior</i>.
      </p>
      <p> 
        Sou graduado em Ciência da Computação pela Universidade Federal do Pampa. 🌳👨‍🎓
      </p>
      <br />
      <p>
        Desenvolvo projetos voltados para a área de Tecnologia da Informação, focando em soluções inovadoras e criativas.
      </p>
      <p>
        Sempre busco oportunidades de aprendizagem e crescimento para melhorar meus conhecimentos.
      </p>

      <h4 className='italic mt-4'>Objetivo 🚩</h4>
      <p>
        Ser um profissional motivado, comprometido, e engajado com a tecnologia, focando em aplicar conhecimentos e soluções para problemas reais.
      </p>
      <p>
        Gosto de trabalhar em equipe, compartilhar conhecimentos de forma a criar um ambiente de crescimento mútuo e ajudar os outros a se desenvolver.
      </p>

      <h4 className='italic mt-4'>Lazer ⚽📖</h4>
      <p>
        Me desenvolver é o que gosto de fazer nas horas vagas, que são compostas, em sua grande maioria, pela prática de esportes, leituras e estudos voltados a tecnologias com aplicabilidade em projetos pessoais.
      </p>


    </div>
  );
}

export default About;
