import React from "react";
import "../bootstrap.min.css";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{marginBottom:'20px'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">BonVida</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link" href="/About">About
                    <span className="visually-hidden">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/ContactUs">Contact Us</a>
                </li>
               <li className="nav-item">
                <a className="nav-link" href="/Cpr">CPR</a>
               </li>
            </ul>
            </div>
        </div>
    </nav>
);
}