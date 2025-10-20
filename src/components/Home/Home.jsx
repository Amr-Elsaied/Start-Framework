import img from '../../assets/avataaars.svg'
import { useEffect } from 'react';
export default function Home() {

useEffect(() => {
    document.title = 'Home - Start Framework'; 
  }, [])






  return (
    <div className=" homeColor vh-98 d-flex justify-content-center flex-column align-items-center pt-5">
      <div className='text-center pt-5'>
        <img style={{ width: '250px' }} className=' mb-3' src={img} alt="avatar" />
      </div>
        <h1 className='text-white text-uppercase display-6 fw-bold pt-4'>start Framework</h1>
    <div className="d-flex align-items-center justify-content-center w-100 mt-2">
    <div className="line"></div> 
    <i className="fa-solid fa-star mx-3 text-white"></i> 
    <div className="line"></div> 
    </div>
        <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
