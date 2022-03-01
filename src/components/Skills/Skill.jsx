import React from 'react'
import Desktop from './Desktop';
import Movil from './Movil';
import Web from './Web';

const Skill = () => {
    return (
        <div className='row pt-5 '>

            <Movil/>
            <Web/>
            <Desktop/>
      

        </div>
    );
}

export default Skill
