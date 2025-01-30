import { useState } from 'react';
import './index.css';
import { GrLinkTop } from "react-icons/gr";

const GoTopButton = () => {
  const [scroll_position, setScrollPosition] = useState(0);
  window.addEventListener('scroll', () => {
    setScrollPosition(scrollY);
  })
  function goTop() {
    scrollTo({behavior: 'smooth', top: 0});
  }

  return (
    <div id="go-top-button" className={`px-2 flex flex-col justify-center items-center rounded p-2 hover:cursor-pointer bg-white transition opacity-30 hover:opacity-100 ${scroll_position > 250 ? 'visible' : 'invisible'}`} onClick={goTop} >
      <GrLinkTop size={24} color='black' />
      <span className='text-black text-xs'>Ir para o início</span>
    </div>
  );
}

export default GoTopButton;
