import React,{useState,useContext} from 'react'
import UIInput from '../../components/UIInput'
import UIButton from '../../components/UIButton';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/login';

const Login = () => {

    const {globalIniciarSesion} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [Merror, setMerror] = useState(false);
    // const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const handleChange = (e) => {
        setUser(e);
        setError(false)
    };
    const handleChangeContraseña = (e) => { 
        setPassword(e);
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        let json = {
            user : user,
            password : password
        }
        if(password.length === 0 ){
            setMerror('Debe ingresar una contraseña')
        }
        try{
            login(json).then( res =>{
                if(res?.isAuthenticated){
                    let data = {
                        globalUsuId: 1,
                        globalUsuName: res.nameUser,
                        globalUsuSurname: res.lastName,
                        globalUsuCellphone: "999999999",
                        globalUsuEmail: res.email,
                        globalUsuRole: res.roles,
                        globalBirthDate : "",
                        globalAddress : "",
                        globalGen : res.idGender,
                        globalUsuTipoDoc: "DNI",
                        globalDocIdentidad: res.userName,
                      }
                      localStorage.setItem(
                        'user',
                        JSON.stringify(data)
                    );
                    globalIniciarSesion(data)
                    navigate('/auth')
                }else{
                    setMerror('Usuario no registrado')
                }
            })
        } catch (e){
            console.log(e)
            setMerror('Problemas de autenticación')
        }
    }

  return (
    <div className='flex flex-col min-h-screen' >
        {/* <div className="absolute left-0 w-1/3 -rotate-12 -top-48 h-1/2 blur-3xl animate-pulse bg-primary bg-opacity-70"></div>
        <div className="absolute w-2/3 -right-48 -rotate-12 -bottom-48 h-2/3 blur-3xl animate-pulse bg-primary bg-opacity-70"></div> */}
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
                    {/* <div className="relative flex border rounded overflow-hidden w-full h-[55px] shadow-inner">
                        <label className="mb-2 font-semibold text-left text-black">
                            Contraseña
                        </label>
                        <div className="flex border-[1px] p-3 rounded-xl outline-none border-first text-black">
                            <input
                                type={!show ? 'password' : 'text'}
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                className="w-full outline-none"
                                value={password}
                                onChange={(e)=>{handleChangeContraseña(e)}}
                                autoComplete="off"
                                style={
                                    // delete every webkit appearance
                                    {
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        appearance: 'none',
                                    }
                                }
                            />
                            <div onClick={()=>{setShow(!show)}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                            </div>
                        </div>
                    </div> */}
                  
                    
                    <UIButton >Ingresar</UIButton>
                </form>
                <div className='text-[18px] text-red-500 text-center ' >
                    {Merror}
                </div>
            </div> 
    </div>
    </div>
  )
}

export default Login