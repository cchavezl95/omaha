import React from 'react'
import UIButton from './UIButton';

const UIHeaderSub = ({title}) => {

    const cerrar = () =>{
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload()
    }

  return (
   <>
    <div className='flex items-center justify-between'>
                <div className='text-slider font-bold text-[24px] font-principal'>
                    {title}
                </div>
                <div className='flex items-center'>
                    <UIButton onClick={cerrar}>Cerrar Sesión</UIButton>
                </div>
            </div>
   </>
  )
}

export default UIHeaderSub