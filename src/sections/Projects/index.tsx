import ProjectCard from '../../components/ProjectCard';
import github from '../../assets/social_medias/github.svg';
const AUTHOR = "JuniorThume";

const projects = [
  {
    name: `${AUTHOR}/Compacine`,
    technologies: ['Node.JS', 'Express', 'TypeScript', 'TypeORM', 'SQLite'],
    link: 'https://github.com/JuniorThume/Compacine',
    description: 'Sistema de gerenciamento de Sessões de Cinema, permitindo a gestão de ingressos, filmes e sessões com suas respectivas salas.'
  }, 
  {
    name: `${AUTHOR}/Flexilease-Auto`,
    technologies: ['Node.JS', 'Express', 'TypeScript', 'Mongoose', 'MongoDB'],
    link: 'https://github.com/JuniorThume/Flexilease-Auto',
    description: 'Trata-se de um sistema de gestão para uma locadora de veículos, dispondo do gerenciamento sobre veículos, também sobre acessórios atrelados a veículos e as reservas realizadas.'
  }, 
  {
    name: `${AUTHOR}/VetClinic`,
    technologies: ['Node.JS', 'Express', 'JavaScript' , 'Sequelize', 'SQLite'],
    link: 'https://github.com/JuniorThume/VetClinic',
    description: 'Sistema de gestão construídos para os moldes de uma clínica veterinária, fornecendo controle entre tutores e pets, além de permitir estabelecer relação entre ambos.'
  }, 
  {
    name: `${AUTHOR}/entERPrise-Front-TCC`,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/JuniorThume/Flexilease-Auto',
    description: 'Front-End referente ao projeto desenvolvido como TCC no curso de Ciência da computação pela Universidade Federal do Pampa, objetivando o desenvolvimento de um sistema web de gestão para empresas do comércio varejista.'
  }, 
  {
    name: `${AUTHOR}/entERPrise-Back-TCC`,
    technologies: ['Node.JS', 'TypeScript', 'Express', 'PostgreSQL', 'TypeORM'],
    link: 'https://github.com/JuniorThume/Flexilease-Auto',
    description: 'Trata as requisições provindas do Front-End do projeto de TCC pela Universidade Federal do Pampa, coordenando, até o momento, produtos e funcionários de uma loja do varejo.'
  }
]

const Projects = () => {

  return (
    <div id='projects' className='flex flex-col justify-self-center relative items-center w-2/3 my-7'>
      <div className='flex w-full justify-center items-center'>
        <h2 className='text-[3rem]'>Projetos</h2>
        <a href="https://github.com/JuniorThume?tab=repositories" target="_blank" rel="noopener noreferrer" className='flex absolute right-1 p-1 gap-2 items-center bg-[#8888] text-black rounded hover:scale-[1.17] hover:bg-[#AAAA] transition'>
          <span>GitHub</span>
          <img src={github} alt="Logo do GitHub" width={30} />
        </a>
      </div>
      <div className='p-2 mt-5 gap-1 overflow-y-auto max-h-[500px] w-full flex flex-col'>
        {
          projects?.map((pjt) => {
            return (<ProjectCard project={pjt} />)
          })
        }
      </div>
    </div>
  );
}

export default Projects;
