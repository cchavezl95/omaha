import React, { useEffect, useState } from 'react'
import UISlider from '../../components/UISlider'
import Perfil from '../opciones/Perfil';
import EstadosCuenta from '../opciones/EstadosCuenta';
import Reportes from '../opciones/Reportes';
import Comunicado from '../opciones/Comunicado';

const Profile = () => {

    const [idVista,setIdVista] = useState(2)
    
    let component ;

    switch(idVista){
        case 1 : 
        component=<Perfil />;
        break;
        case 2 : 
        component=<EstadosCuenta />;
        break;
        case 3 : 
        component=<Comunicado />;
        break;
        case 4 : 
        component=<Reportes />;
        break;
        default :
        component=<Perfil />;
        break;
    }


  return (
    <div className='flex flex-col min-h-screen' >
        <UISlider component={component} setIdVista={setIdVista}  />
    </div>

  )
}

export default Profile