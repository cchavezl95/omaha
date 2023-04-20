import React from 'react'
import UIHeaderSub from '../../components/UIHeaderSub';

const Comunicado = () => {
  return (
   <>
     <div className='p-6' >
        <UIHeaderSub title="Comunicado" />
        <div className='p-4 mt-[30px] md:p-10 rounded-lg'>
            <img src='/assets/img/comunicado.png' />
        </div>
     </div>
    </>
  )
}

export default Comunicado