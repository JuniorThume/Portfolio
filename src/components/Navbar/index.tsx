import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <div className='w-full bg-white py-4 px-2 flex justify-center sticky'>
      <div className='flex w-1/3 justify-around  text-black'>
        <a className='text-sm navbar-button' href='#home'>Home</a>
        <a className='text-sm navbar-button' href='#about'>Sobre</a>
        <a className='text-sm navbar-button' href='#techs'>Tecnologias</a>
        <a href='#projects' className='text-sm navbar-button'>Projetos</a>
        <a className='text-sm navbar-button' href='#contact'>Contato</a>
      </div>
    </div>
  );
}

export default Navbar;
