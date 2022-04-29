import {render} from "@testing-library/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons"
import {} from "@fortawesome/free-brands-svg-icons"
import {useState, useRef} from "react";
import React from 'react';


const Nav = () => {
    const menu = document.querySelector(".menu");
    const myRef=useRef();
    const buttonClick=()=>{

        myRef.current.classList.toggle("active");
       
    };
    
    return (
        <nav className="navegacion ">
            <ul ref={myRef}  className="menu">
                <li>
                    <a href="/home">Home</a>
                </li>
       
                <li>
                    <a href="/project">Project</a>
                </li>

                <li>
                    <a href="/skill">Skills</a>
                </li>

           
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="https://darwinghernandez.netlify.app/">about</a>
                </li>
                

            </ul>
            <div id="btn-hamburguesa" onClick={buttonClick} className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
            </div>
           
        </nav>
    );


}


export default Nav;
