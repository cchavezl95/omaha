import React,{useContext} from 'react'
import UIButton from './UIButton';
import AuthContext from '../context/authContext';

const UIHeaderSub = ({title}) => {

    const {globalDataUser} = useContext(AuthContext);
    const cerrar = () =>{
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload()
    }


  return (
   <>
    <div className='flex justify-between'>
                <div>
                    <div className='text-slider font-bold text-[24px] font-principal'>
                        {title}
                    </div>
                    <div className='w-[300px] h-full flex flex-col space-y-1 mt-[20px]' > 
                            <div className='text-[14px]'>{`Nombre: ${globalDataUser.globalDataUser.globalUsuName}`}</div> 
                            <div className='text-[14px]'>{`Documento: ${globalDataUser.globalDataUser.globalDocIdentidad}`}</div>
                            <div className='text-[14px]'>{`Correo: ${globalDataUser.globalDataUser.globalUsuEmail}`}</div>
                        </div>
                </div>
                
                <div className='flex'>
                <UIButton onClick={cerrar}>Cerrar Sesión</UIButton>
                </div>
            </div>
   </>
  )
}

export default UIHeaderSub