export default function Footer() {
return (
    <>
<footer className="text-center text-lg-start text-muted mainColor">
    <div className=" py-5">
    <div className="container-fluid text-center text-md-start mt-5">
        <div className="row  mt-3">
        
        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-normal fs-3 text-white mb-2">LOCATION</h6>
            <p className="text-white">2215 John Daniel Drive</p>
            <p className="text-white">Clark, MO 65243</p>
        </div>


        <div className="links col-md-4 col-lg-4 col-xl-3 text-center mx-auto py-sm-4 py-md-0">
            <h6 className="text-uppercase text-center fw-normal fs-3 text-white mb-2">AROUND THE WEB</h6>
            <p className="d-flex justify-content-center align-items-center"> 
            <a href="#" className="p-1 border rounded-circle border-1 "><i class="fa-brands text-white fa-facebook-f fa-lg"></i></a>
            <a href="#" className="ms-2 p-1 border rounded-circle border-1"><i class="fa-brands text-white fa-twitter fa-lg"></i></a>
            <a href="#" className="ms-2 p-1 border rounded-circle border-1"><i class="fa-brands text-white fa-linkedin-in fa-lg"></i></a>
            <a href="#" className="ms-2 p-1 border rounded-circle border-1"><i class="fa-solid text-white fa-globe fa-lg"></i></a>
            </p>
            
        </div>
        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase text-center fw-normal fs-3 text-white mb-2">ABOUT FREELANCER</h6>
            <p className="text-white text-center">Freelance is a free to use, licensed Bootstrap theme created by Route </p>
        </div>
        </div>
    </div>
    </div>
    <div className="text-center secondColor p-4 text-white" >
    <p className="m-0">Copyright © Your Website 2025</p> 
    
    </div>
</footer>
    </>
)}
