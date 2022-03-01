import React from 'react'

const Project = () => {
    return (
        <div className=' pt-5'>
            <div className="fs-1"
                style={
                    {width: "6rem;"}
            }>
                Projects Github.
            </div>
            <div className=' pt-5 row'>
                <div className=' col-lg-4'>
                    <div className='p-2 shadow-sm b-5 mb-5 bg-body rounded pt-3'>
                        <div className=""
                            style={
                                {width: "18rem;"}
                        }>
                            <img src="https://okhosting.com/resources/uploads/2019/01/java.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>


                </div>
                <div className=' col-lg-4'>
                    <div className='p-2 shadow-sm b-5 mb-5 bg-body rounded pt-3'>
                        <div className=""
                            style={
                                {width: "18rem;"}
                        }>
                            <img src="https://okhosting.com/resources/uploads/2019/01/java.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>


    )
}

export default Project
