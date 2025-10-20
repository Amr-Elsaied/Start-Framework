import { useEffect } from 'react';

export default function Contact() {
useEffect(() => {
    document.title = 'Contact - Start Framework'; 
  }, [])


  return (
    <>
    <div className="vh-100 d-flex mt-5 flex-column align-items-center  pt-5">
      <h1 className='text-uppercase display-6 fw-bold mt-2 pt-4 mainColor2'>conatct section</h1>
    <div className="d-flex align-items-center justify-content-center w-100 mt-2">
    <div className="lineC "></div> 
      <i className="fa-solid fa-star mx-3 mainColor2"></i> 
    <div className="lineC "></div> 
    </div>
<div className='w-50 mx-auto'>
<form className='mt-5 pt-5 w-95 mx-auto'>
    <div className="form-floating mb-4 py-1">
      <input type="text" className="form-control" id="userName" placeholder="UserName" />
      <label htmlFor="userName">userName</label>
    </div>
    <div className="form-floating mb-4 py-1">
      <input type="text" className="form-control" id="userAge" placeholder="userAge" />
      <label htmlFor="userAge">userAge</label>
    </div>
    <div className="form-floating mb-4 py-1">
      <input type="email" className="form-control" id="userEmail" placeholder="userEmail" />
      <label htmlFor="userEmail">userEmail</label>
    </div>
    <div className="form-floating mb-4 py-1">
      <input type="password" className="form-control" id="userPassword" placeholder="userPassword" />
      <label htmlFor="userPassword">userPassword</label>
    </div>
    <button type="submit" className="btn" style={{backgroundColor: '#1ABC9C', color: 'white'}}>send Message</button>
</form>
</div>
    </div>
    </>
  )
}
