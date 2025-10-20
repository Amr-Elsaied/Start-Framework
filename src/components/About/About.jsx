import { useEffect } from 'react';


export default function About() {

useEffect(() => {
    document.title = 'About - Start Framework'; 
}, [])

return (
    <>
    <div className="homeColor vh-98 d-flex justify-content-center flex-column align-items-center pt-5">
    <h1 className='text-white text-uppercase display-6 fw-bold pt-4'>about component</h1>
    <div className="d-flex align-items-center justify-content-center w-100 mt-2">
    <div className="line"></div> 
    <i className="fa-solid fa-star mx-3 text-white"></i> 
    <div className="line"></div> 
    </div>
    <div className='container w-75 d-flex justify-content-center align-items-center'>
    <p className='text-white mt-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
    <p className='text-white mt-3'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
    </div>
    </div>
    </>
)}
