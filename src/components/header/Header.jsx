import React from "react";

import Nav from "./nav";
const Header = () => {
  return (
    <>
  
    <header className="header fixed-top ">
      <div className="interior">
        <a href="/" className="logo">
          <img src="logo.png" alt="" />
          <span>Darwing </span>
        </a> 
        <Nav />
      
      </div>
     
    </header>
    

    </>
  );
};

export default Header;
