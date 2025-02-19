import './index.css';

const Navbar = () => {
  return (
    <div className='w-full bg-white py-4 px-2 flex justify-center items-center gap-2 sticky'>
      <div className='grid grid-cols-[auto_auto_auto_auto] gap-10 '>
        <a className='text-sm navbar-button' href='#about'>Sobre</a>
        <a className='text-sm navbar-button' href='#techs'>Tecnologias</a>
        <a href='#projects' className='text-sm navbar-button'>Projetos</a>
        <a className='text-sm navbar-button' href='#contact'>Contato</a>
      </div>
    </div>
  );
}

export default Navbar;
