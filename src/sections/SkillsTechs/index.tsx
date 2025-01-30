import SkillCard from '../../components/SkillCard';
import docker from '../../assets/techs/Docker.svg';
import aws from '../../assets/techs/AWS.svg';
import express from '../../assets/techs/Express.svg';
import git from '../../assets/techs/Git.svg';
import jest from '../../assets/techs/Jest.svg';
import node from '../../assets/techs/Node.js.svg';
import mysql from '../../assets/techs/MySQL.svg';
import mongo from '../../assets/techs/MongoDB.svg';
import postgres from '../../assets/techs/PostgresSQL.svg';
import postman from '../../assets/techs/Postman.svg';
import react from '../../assets/techs/React.svg';
import tailwind from '../../assets/techs/Tailwind CSS.svg';
import python from '../../assets/techs/Python.svg';
import go from '../../assets/techs/Go.svg';

const skills = [
  {
    image: aws,
    name: 'AWS',
    certified: true,
  }, 
  {
    image: docker,
    name: 'Docker',
  },
  {
    image: express,
    name: 'Express',
  },
  {
    image: git,
    name: 'Git',
  },
  {
    image: jest,
    name: 'Jest',
  },
  {
    image: node,
    name: 'Node.js',
  },
  {
    image: mysql,
    name: 'MySQL',
  },
  {
    image: mongo,
    name: 'MongoDB',
  },
  {
    image: postgres,
    name: 'PostgresSQL',
  },
  {
    image: postman,
    name: 'Postman',
  },
  {
    image: react,
    name: 'React',
  },
  {
    image: tailwind,
    name: 'Tailwind CSS',
  },
  {
    image: python,
    name: 'Python',
  },
  {
    image: go,
    name: 'Go',
  }
]

const SkillsAndTechs = () => {

  return (
    <div className='w-2/3 justify-self-center p-2' id='techs'>
      
      <h2 className='text-center text-[3rem]' id='skills_techs'>Tecnologias trabalhadas</h2>
      
      <div className='grid grid-cols-5 gap-2 mt-10'>
        {skills.map((skill) => {
          return <SkillCard image={skill.image} name={skill.name} certified={skill.certified} />
        })}
      </div>
    </div>
  );
}

export default SkillsAndTechs;
