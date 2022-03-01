import React from 'react'

const Web = () => {
  return (
    <div className=' col-lg-4'>
    <div className='p-2 shadow-sm b-5 mb-5 bg-body rounded '>
        <div className='p-3'>
            <h2>Desarrollo Web</h2>
        </div>
        <div className="p-3 ">

            <div className="p-2" aria-current="true">
                <div className='row '>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo web con PHP</h5>

                        </div>
                        <p className="mb-1">PHP es un lenguaje de programación de uso general que se 
                        adapta especialmente al desarrollo web.​ ​</p>
                        
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png" alt=""/>
                    </div>

                </div>
               
                <div className='row  pt-5'>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo web Java y Spring Boot (Back end)</h5>

                        </div>
                        <p className="mb-1">XSpring Boot facilita la creación de aplicaciones 
                        basadas en Spring independientes y 
                        de grado de producción que puede "simplemente ejecutar".</p>
                        
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" alt=""/>
                    </div>

                </div>
                <div className='row  pt-5'>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo web con Nodejs y Express (Back end)</h5>

                        </div>
                        <p className="mb-1">Node.js es un entorno en tiempo de ejecución multiplataforma,
                         de código abierto.</p>
                      
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" alt=""/>
                    </div>

                </div>
                <div className='row  pt-5'>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo web con Reactjs (Front end)</h5>

                        </div>
                        <p className="mb-1">React es una biblioteca Javascript de código abierto 
                        diseñada para crear interfaces de usuario con el objetivo de facilitar
                         el desarrollo de aplicaciones en una sola página. </p>
                      
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt=""/>
                    </div>

                </div>

            </div>

        </div>
    </div>

</div>
  )
}

export default Web