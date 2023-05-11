import React, { useState } from 'react'
import UISlider from '../../components/UISlider'
import EstadosCuenta from '../opciones/EstadosCuenta';
import Reportes from '../opciones/Reportes';
import ResetUsers from '../opciones/ResetUsers';

const Profile = () => {

    const [idVista,setIdVista] = useState(1)
    
    let component ;

    switch(idVista){
        case 1 : 
        component=<EstadosCuenta />;
        break;
        case 2 : 
        component=<Reportes />;
        break;
        case 3 : 
        component=<ResetUsers />;
        break;
        default :
        component=<EstadosCuenta />;
        break;
    }


  return (
    <div className='flex flex-col min-h-screen' >
        <UISlider component={component} setIdVista={setIdVista}  />
    </div>

  )
}

export default Profile