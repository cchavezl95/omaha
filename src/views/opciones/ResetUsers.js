import React,{useContext,useState} from 'react'
import UIHeaderSub from '../../components/UIHeaderSub'
import UIButton from '../../components/UIButton';
import { updatePass } from '../../services/login';
import AuthContext from '../../context/authContext';
import UIInput from '../../components/UIInput';

const ResetUsers = () => {
    const {globalDataUser} = useContext(AuthContext);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const updatePassword = (pass) =>{
        let obj = {
            idUser : globalDataUser.globalDataUser.globalUsuId,
            password : pass
        }
        updatePass(obj).then(res=>{
            setMsg('Se Actualizó la contraseña')
            setPassword1('')
            setPassword2('')
        }).catch(err=>{
            setMsg('Problemas')
        })
    }

    const handleChangeContraseña1 = (e) => { 
        setPassword1(e);
    };
    const handleChangeContraseña2 = (e) => { 
        setPassword2(e);
    };

    const validar =(e)=>{
        e.preventDefault();
        if(password1===password2){
            updatePassword(password2)
        }else{
            setMsg('Las contraseñas no coinciden')
        }
    }

  return (
    <>
        <div className='p-6' >
            <UIHeaderSub title="Resetear Contraseña" ></UIHeaderSub>
            <div className="p-4 mt-[30px] md:p-10 rounded-lg">
                <form className='w-[420px] flex flex-col items-center justify-center gap-4' onSubmit={validar}>
                    <div className='flex w-full' >
                        <div className='w-4/5' >
                            <UIInput
                            label="Contraseña"
                            type="password"
                            error={error}
                            handleChange={handleChangeContraseña1}
                            value={password1}
                        />
                        </div>
                    <div className='w-1/5 my-auto mx-auto'>
                        {
                            password1 !== "" && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>)
                        }
                    </div>
                    

                    </div>
                    

                    <div className='flex w-full' >
                        <div className='w-4/5'>
                        <UIInput
                        label="Repetir Contraseña"
                        type="password"
                        error={error}
                        handleChange={handleChangeContraseña2}
                        value={password2}
                        />
                        </div>
                        <div className='w-1/5 my-auto mx-auto' >
                            {
                                password1 !== "" && password1===password2 ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                                :
                                <>
                                    {
                                        password2 !== "" && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>)
                                    }
                                </>
                            }
                        </div>
                    

                    </div>
                    <div className='w-full' >
                        <div className='w-4/5  mx-0'>
                        <UIButton >Actualizar contrasñea</UIButton>
                        </div>
                    </div>
                </form>
                <div className='mt-[30px] w-[35%] text-center'>
                    {msg}
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetUsers