import { FaExternalLinkAlt } from 'react-icons/fa';

type projectType = {
  name: string;
  technologies: string[];
  link: string;
  description: string;
}

interface ProjectCardProps {
  project: projectType;
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className='relative rounded bg-white text-black p-4'>
      <div>
        <h2 className='text-2xl'>{project.name}</h2>
      </div>
      <div className='flex'>
        <h4>Tecnologias:</h4>
        <div className='w-full flex gap-2 px-2'>
          {
            project.technologies.map((tech, index) => (
              <span key={index} className='bg-[#444] rounded text-white px-1 text-sm'>{tech}</span>
            ))
          }
        </div>
      </div>
      <div className='my-1'>
        <p>{project.description}</p>
      </div>
      <div className='absolute p-1 right-1 top-1'>
        <a target='_blank' href={`${project.link}`}><FaExternalLinkAlt /></a>
      </div>

    </div>
  );
}

export default ProjectCard;
