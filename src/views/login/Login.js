import React,{useState,useContext} from 'react'
import UIInput from '../../components/UIInput'
import UIButton from '../../components/UIButton';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {globalIniciarSesion} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [Merror, setMerror] = useState(false);
    let navigate = useNavigate();
    const handleChange = (e) => {
        setUser(e);
        setError(false)
    };
    const handleChangeContraseña = (e) => {
        setPassword(e);
    };

    const onSubmit = () =>{

        if(user == "42554388" || user== "07271049" ){
            if(password.length == 0 ){
                setMerror('Debe ingresar una contraseña')
            }else{
                let data = {
                    globalUsuId: "1",
                    globalUsuName: "JUAN CARLOS",
                    globalUsuSurname: "PEREZ LOPEZ",
                    globalUsuCellphone: "999999999",
                    globalUsuEmail: "stnperu@gmail.com",
                    globalUsuRole: "2",
                    globalBirthDate : "1995-03-09",
                    globalAddress : "JR MAR DE LA PLATA 172 SJ",
                    globalGen : "M",
                    globalUsuTipoDoc: "DNI",
                    globalDocIdentidad: user,
                  }
                  localStorage.setItem(
                      'user',
                      JSON.stringify(data)
                  );
                  globalIniciarSesion(data)
                  navigate('/auth')
            }
        }else{
            setMerror('Usuario no registrado')
        }
    }

  return (
    <div className='flex flex-col min-h-screen' >
    <div className="flex flex-col w-full h-full py-20 bg-center bg-cover grow bg-gray-500"
        style={{ backgroundImage: 'url(/assets/img/Img_principal.jpg)' }}
    >
            <div className="flex gap-4 p-7 pb-10 flex-col items-center justify-center max-w-[370px] w-full shadow-sm bg-white rounded-[5px] animate-appeartop m-auto md:my-auto md:mx-[10%]">
                <div className="text-[64px] font-principal text-principal font-black">
                    omaha
                </div>
                <div
                    // onSubmit={onSubmit}
                    className="flex flex-col items-center justify-center w-full gap-3">
                    <UIInput
                        label="Usuario"
                        error={error}
                        handleChange={handleChange}
                        value={user}
                    />
                    <UIInput
                        label="Contraseña"
                        type="password"
                        error={error}
                        handleChange={handleChangeContraseña}
                        value={password}
                    />
                    <UIButton onClick={onSubmit} >Ingresar</UIButton>
                </div>
                <div className='text-[18px] text-red-500 text-center ' >
                    {Merror}
                </div>
            </div> 
    </div>
    </div>
  )
}

export default Login