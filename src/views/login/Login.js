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
    let navigate = useNavigate();
    const handleChange = (e) => {
        setUser(e);
        setError(false)
    };
    const handleChangeContraseña = (e) => {
        setPassword(e);
    };

    const onSubmit = () =>{
        let data = {
          globalUsuId: "1",
          globalUsuName: "Cristhian",
          globalUsuSurname: "Chavez",
          globalUsuCellphone: "959158672",
          globalUsuEmail: "cchavezl1995@gmail.com",
          globalUsuRole: "",
          globalBirthDate : "1995-03-09",
          globalAddress : "JR MAR DEL PLATA 172 COVIMA",
          globalGen : "M",
          globalUsuTipoDoc: "DNI",
          globalDocIdentidad: "72896730",
        }
        localStorage.setItem(
            'user',
            JSON.stringify(data)
        );
        globalIniciarSesion(data)
        navigate("/auth")
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
                <form
                    onSubmit={onSubmit}
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
                </form>
            </div> 
    </div>
    </div>
  )
}

export default Login