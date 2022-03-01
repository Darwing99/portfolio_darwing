import React from 'react'

const Desktop = () => {
  return (
    <div className=' col-lg-4'>
    <div className='p-2 shadow-sm b-5 mb-5 bg-body rounded '>
        <div className='p-3'>
            <h2>Desarrollo Movil</h2>
        </div>
        <div className="p-3 ">

            <div className="p-2" aria-current="true">
                <div className='row '>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo Nativo con Java</h5>

                        </div>
                        <p className="mb-1">Java fue elegido como el lenguaje para el entorno de 
                        desarrollo de Android, el sistema operativo móvil líder en smartphones y
                         tablets. Android es por tanto el sistema operativo
                         (es una versión de Linux) y Java el lenguaje utilizado 
                         para crear apps en él.</p>
                        
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="http://2.bp.blogspot.com/-tlWRK_iEUVc/UPgJ2lxV0zI/AAAAAAAAAWo/w2jM_Crk1cc/s1600/java-for-android.png" alt=""/>
                    </div>

                </div>
               
                <div className='row  pt-5'>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo Hibrido con Xamarin Forms</h5>

                        </div>
                        <p className="mb-1">Xamarin.Forms es un marco multiplataforma de 
                        código abierto de Microsoft para crear aplicaciones de iOS, Android 
                        y Windows con .NET 
                        a partir de una única base de código compartida.</p>
                        
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://codigofinal.com/wp-content/uploads/2021/01/xamarinLogoTitlejpg.jpg" alt=""/>
                    </div>

                </div>
                <div className='row  pt-5'>
                    <div className='col-lg-9'>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-success mb-2">Desarrollo nativo con Flutter</h5>

                        </div>
                        <p className="mb-1">Flutter es un marco de trabajo de código abierto 
                        de Google para crear hermosas aplicaciones multiplataforma 
                        compiladas de forma nativa a partir de una única base de código.</p>
                      
                    </div>
                    <div className='col-lg-3'>
                        <img className='card-img-top' src="https://ih1.redbubble.net/image.1057190214.1918/flat,750x1000,075,f.u1.jpg" alt=""/>
                    </div>

                </div>

            </div>

        </div>
    </div>

</div>
  )
}

export default Desktop