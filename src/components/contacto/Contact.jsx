import React from 'react'

import Message from './Message';
import Redes from './Redes';
import Whatsapp from './Whatsapp';
const Contact = () => {

    return (
        <div className='pt-5'>
            <div className=' pt-5 shadow-sm b-5 mb-5 bg-body container '>


                <div className='row'>
                    <div className='p-2'
                        style={
                            {textAlign: "center",margin:"20px"}
                    }>
                        <h2>
                            Contact
                        </h2>
                    </div>
                    <Message/>
                    <Redes/>
                    <Whatsapp/>

                </div>

            </div>
        </div>
    )
}

export default Contact
