import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const BannerPrincipal = () => {
  return (
    <div className=" pt-2">
      <div className="row ">
        <div   className="carousel-inner slide"  >
          <div className="carousel-item active">
            <div className="pt-5">
              <img src="banner.png" className="d-block h-100 w-100" alt="banner principal" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Hola! Bienvenidos al Sitio</h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;
