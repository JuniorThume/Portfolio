import resume from '../../assets/resume/resumeVTJ.pdf';
import photo from '../../assets/user_photo.png';

const Presentation = () => {
  return (
    <div className='flex flex-col items-center my-4'>
      <div className='w-full flex justify-center py-10'>
        <img src={photo} className='rounded-full self-center w-[230px] outline outline-2 p-1' />
      </div>
      <h2 className='text-[2rem] font-[600]'>Valmir Thume Junior</h2>
      <p>23 anos</p>
      <div className='mb-5'>
        <span>Campina das Missões - RS 📍</span>
      </div>
      <div className='border p-2 hover:bg-white hover:text-black hover:cursor-pointer rounded'>
        <a href={resume} download='ValmirThumeJunior-Resume.pdf' type='application/pdf'>Download Currículo</a>
      </div>
    </div>
  );
}

export default Presentation;
