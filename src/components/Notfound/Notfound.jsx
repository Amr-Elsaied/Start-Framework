import { useEffect } from "react";
import { Link } from "react-router-dom";




export default function Notfound() {
useEffect(() => {
    document.title = '404 - Page Not Found';
}, []);


return (
    <div className="vh-100 notfound d-flex justify-content-center flex-column align-items-start">
    <div className=" container">
    <div className="row">
    <div className=" col-md-6 text-center">
        <h1 className="notfound-h1 fw-bolder ">404</h1>
        <h2 className="notfound-h2">Page Not Found</h2>
        <p className="notfound-p">
        We're sorry, the page you requested could not be found
        <p>Please go back to the homepage</p>
        </p>
        <Link className="btn notfound-b" to="/">GO HOME</Link>
    </div>
    </div>
    </div>
    </div>
)}








