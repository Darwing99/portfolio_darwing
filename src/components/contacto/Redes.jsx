import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
  
    faInstagram,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {faGifts} from '@fortawesome/free-solid-svg-icons';
const Redes = () => {
    return (
        <div className="col-lg-6">
            <div className='p-2  '>
                <div className='row'>

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&h=700" className="d-block w-100" alt="..."/></div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&h=700" className="d-block w-100" alt="..."/></div>
                            <div class="carousel-item">
                                <img src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&h=700" className="d-block w-100" alt="..."/></div>
                        </div>
                       
                    </div>
                </div>
                <div className='pt-5 row'>
                    <div class="p-5 list-group">
                      
                        <a type="button" class="list-group-item list-group-item-action">
                            Instagram
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                      
                        <a href='https://www.youtube.com/channel/UCrhI8Y1J0d8YHQqcf0hk1NQ' type="button" class="list-group-item list-group-item-action">
                            Youtube 
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a type="button" class="list-group-item list-group-item-action">
                            Linkedin 
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href='https://github.com/Darwing99' type="button" class="list-group-item list-group-item-action">
                        Github <i className="fab fa-github"></i>
                           
                        </a>
                    </div>


                   
                </div>

            </div>


        </div>
    )
}

export default Redes
