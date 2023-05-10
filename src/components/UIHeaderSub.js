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
    <div className='flex items-center justify-between'>
                <div className='text-slider font-bold text-[24px] font-principal'>
                    {title}
                </div>
                <div className='flex items-center'>
                    <div className='flex' >
                        <div className='w-[300px] h-full flex flex-col space-y-1' > 
                            <div className='text-[12px]'>{`Documento: ${globalDataUser.globalDataUser.globalDocIdentidad}`}</div>
                            <div className='text-[12px]'>{`Nombre: ${globalDataUser.globalDataUser.globalUsuName}`}</div> 
                            <div className='text-[12px]'>{`Correo: ${globalDataUser.globalDataUser.globalUsuEmail}`}</div>
                        </div>
                        <div>
                        <UIButton onClick={cerrar}>Cerrar Sesión</UIButton>
                        </div>
                        
                    </div>
                </div>
            </div>
   </>
  )
}

export default UIHeaderSub