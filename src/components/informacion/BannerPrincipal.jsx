import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"
const BannerPrincipal = () => {
  return (
    <div className="col-lg-12">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="banner.png" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Hola! Bienvenidos al Sitio</h5>
                    <div className='pt-5'>
                        
                    <a href='https://drive.google.com/file/d/1-yLiR5lYvNGXiHGkduUzJfa68yYZOsju/view?usp=sharing' className="btn btn-primary">
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Descargar CV</a>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>

</div>
  )
}

export default BannerPrincipal