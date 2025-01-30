
import './index.css';
import certificate from '../../assets/certificate.svg';
interface SkillCardProps {
  name: string;
  image: string;
  certified?: boolean;
}

const SkillCard = ({ image, name, certified = false }: SkillCardProps) => {

  return (
    <div className='border w-auto bg-light_gray flex relative flex-col p-4 rounded justify-center items-center skill-card-animation'>
      {certified && <img id='certificate' className='w-8 absolute top-[-3px] right-1' src={certificate} />}
      <img src={image} alt={name} className='w-[60px] img-tech' />
      <h2 className='text-center text-black'>{name}</h2>
    </div>
  );
}

export default SkillCard;
