import { MouseEvent } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import './index.css';

interface SocialMediaCardProps {
  socialMedia: string;
  href: string;
  icon: string;
}

const SocialMediaCard = ({ icon, href, socialMedia }: SocialMediaCardProps) => {
  function showDetails(element: MouseEvent) {
    const card = element.currentTarget;
    card.addEventListener('mouseover', () => {
      card.classList.add('entered-mouse-card');
    });
  }

  function hideDetails(element: MouseEvent) {
    const card = element.currentTarget;
    card.addEventListener('mouseleave', () => {
      card.classList.remove('entered-mouse-card');
    });
  }

  return (
    <div className='flex flex-col items-center transition p-4 rounded-[20px] gap-[2px]' onMouseEnter={showDetails} onMouseLeave={hideDetails}>
      <img src={icon} alt={socialMedia} className='w-[100px] transition color-light_gray' />
      <a className='bg-white w-full p-1 text-black mt-2 gap-2 invisible flex items-center justify-center rounded cursor-pointer' target='_blank' href={href}>
        Acessar
        <FaExternalLinkAlt />
      </a>
    </div>
  );
}

export default SocialMediaCard;
