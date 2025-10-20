import { useEffect } from 'react';
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio - Start Framework'; 
  }, [])

const cards = [
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
]


  return (
    <>
<div className="d-flex mt-5 flex-column align-items-center py-5">
      <h1 className='text-uppercase display-6 fw-bold mt-2 pt-4 mainColor2'>portfolio component</h1>
    <div className="d-flex align-items-center justify-content-center w-100 mt-2">
    <div className="lineC "></div> 
      <i className="fa-solid fa-star mx-3 mainColor2"></i> 
    <div className="lineC "></div> 
    </div>
  <div className='container d-flex align-items-center justify-content-center'>
  <div className='row g-5'> 
  {cards.map((img, index) => {
return (
    <div key={index} className='col-md-4 pt-3'>
    <div className='position-relative item rounded-3 overflow-hidden'>
    <img className='w-100 rounded-3' src={img} alt={`portfolio ${index+1}`} />
    <div className='overlay position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'style={{ backgroundColor: 'rgba(26, 188, 156, 0.9)' }} >
    <i className="fa-solid fa-plus fa-6x text-white"></i>
    </div>
    </div>
    </div>
)})}
  </div>
  </div>
</div>
      
    </>
  )
}
