import github from '../../assets/social_medias/github.svg';
import linkedin from '../../assets/social_medias/linkedin.svg';
import email from '../../assets/social_medias/gmail.svg';
import SocialMediaCard from '../../components/SocialMediaCard';

const social_medias = [
  {
    icon: linkedin,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/valmir-thume-junior/'
  },
  {
    icon: github,
    name: 'GitHub',
    link: 'https://github.com/JuniorThume'
  },
  {
    icon: email,
    name: 'Email',
    link: 'mailto:thumejuniorvalmir@gmail.com'
  }
]

const Contact = () => {
  return (
    <div className='w-2/3 justify-self-center p-2 mt-5 mb-10' id='contact'>
      <h2 className='text-[3rem] text-center'>Contato</h2>
      <div id='contact-infos' className='grid grid-cols-3 gap-10 pt-7'>
        {
          social_medias.map((sm, index) => {
            return <SocialMediaCard socialMedia={sm.name} icon={sm.icon} href={sm.link} key={index} />
          })
        }
      </div>
    </div>
  );
}

export default Contact;
