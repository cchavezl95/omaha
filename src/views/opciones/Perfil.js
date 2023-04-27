import React,{ useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import '../opciones/perfil.css'
import UIButton from '../../components/UIButton';
import AuthContext from '../../context/authContext';
import { getDataUser } from '../../hooks/utilities';
import UIHeaderSub from '../../components/UIHeaderSub';
import { getPic,setPic,updateUser } from '../../services/profileServices';
import Swal from 'sweetalert2';

const Perfil = () => {

    const {globalDataUser,globalCerrarSesion} = useContext(AuthContext);
    const [picture,setPicture] = useState('')

    const [validaGenero, setValidaGenero] = useState({
        male: true,
        fem: false,
    });

    const onChangeCurriculumSelect = (e, name) => {
        setCurriculum({ ...curriculum, [name]: e.value });
    };

    const [curriculum, setCurriculum] = useState({
        globalUsuId: "",
        globalUsuName: "",
        globalUsuSurname: "",
        globalUsuCellphone: "",
        globalUsuEmail: "",
        globalUsuRole: "",
        globalBirthDate : "",
        globalAddress : "",
        globalGen : 1,
        globalUsuTipoDoc: "",
        globalDocIdentidad: "",
      });

    const onChangeCurriculum = (e) => {
        setCurriculum({ ...curriculum, [e.target.name]: e.target.value });
        if (e.target.name === 'globalGen') {
            if (e.target.value === '1') {
                validaGenero.male = true;
                validaGenero.fem = false;
                setCurriculum({...curriculum,globalGen:'1'});
            } else {
                validaGenero.male = false;
                validaGenero.fem = true;
                setCurriculum({...curriculum,globalGen:'2'});
            }
        }
    };

    const [imgPerfil, setImgPerfil] = useState('');
    const [sinPerfil, setSinPerfil] = useState(true);

    const tipoDocumento = [
        {value:'DNI',label:'DNI'},
        {value:'CE',label:'CE'},
    ]

    const cargaImagen = async (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            let form = {
                idUser : 1,
                nombreArchivo : files[0].name,
                profilePic : e.target.result.split('base64,')[1]
            }
            setPic(form).then(res=>{
                getPicture()
            }).catch(err=>{
                console.log(err)
            })
        };
    };

    const updateUserC = () =>{
        try{
            let form={
                idUser : 1,
                usuario : curriculum.globalDocIdentidad,
                nombres: curriculum.globalUsuName,
                apellidos: curriculum.globalUsuSurname,
                correo: curriculum.globalUsuEmail,
                gender : parseInt(curriculum.globalGen)
            }
            console.log(form)
            updateUser(form).then(res=>{
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Se actualizaron los datos',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        setCurriculum(getDataUser())
        if (getDataUser().globalGen === 1) {
            validaGenero.male = true;
            validaGenero.fem = false;
        } else {
            validaGenero.male = false;
            validaGenero.fem = true;
        }
        getPicture()
    },[]);

    const getPicture = () =>{
        let sinCarga = '/assets/img/img_profile.svg';
        try{
            getPic(1).then(res=>{
                if(res?.nombreArchivo.length >0){
                    let formato = res.nombreArchivo.split('.')[1]
                    setImgPerfil(`data:image/${formato};base64,${res.pic}`)
                    setSinPerfil(false)
                }else{
                    setImgPerfil(sinCarga);
                    setSinPerfil(true);
                }
            })
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <div className='p-6' >
            <UIHeaderSub title="Información Básica" ></UIHeaderSub>
            <div className="p-4 mt-[30px] md:p-10 rounded-lg"
                style={{ boxShadow: ' 0px 0px 30px rgba(0, 135, 174, 0.2)' }} >

                <div className="bg-[#F3F7F9] md:w-[60%] w-full m-auto mb-10 rounded-md">
                        <div className="flex flex-col items-center justify-center md:flex-row">
                            <div className="w-[30%] relative">
                                <label htmlFor="image">
                                    <div
                                        id="imgHV"
                                        className="w-[150px] border-dashed border-2 border-zinc-400 h-[150px] my-[30px] md:flex hidden object-cover "
                                        style={{
                                            background: `url(${imgPerfil}) ${
                                                sinPerfil ? 'no-repeat  center' : ''
                                            } `,
                                            backgroundSize: `${
                                                sinPerfil ? '' : 'cover'
                                            }`,
                                        }}>
                                        <input
                                            id="image"
                                            type="file"
                                            className="opacity-0"
                                            onChange={(e) => {
                                                cargaImagen(e);
                                            }}
                                        />
                                    </div>
                                    <img
                                        src="/assets/ico/ico_plus.svg"
                                        alt="plus"
                                        className="absolute right-[30%] bottom-10 md:block hidden"
                                    />
                                </label>
                            </div>
                            <div className="p-3">
                                <div className="separator1w-full font-ubuntu">
                                    <p className="text-[20px] font-bold mb-3 font-principal">
                                        Carga tu foto
                                    </p>
                                    <p className='text-[16px] font-principal font-bold'>
                                        1. Utiliza una foto reciente con fondo
                                        claro.
                                    </p>
                                    <p className='text-[16px] font-principal font-bold'>2. Evita usar fotos grupales.</p>
                                    <p className='text-[16px] font-principal font-bold'>
                                        3. Selecciona una foto en donde estés de
                                        frente.
                                    </p>
                                </div>
                            </div>
                            <label htmlFor="image2">
                                <div className="md:hidden flex w-[80%] m-auto h-[200px] relative bg-white border-dashed border-2 border-zinc-400">
                                    <div
                                        id="imgHV"
                                        className="object-cover w-full h-full overflow-hidden bg-center bg-contain"
                                        style={{
                                            background: `url(${imgPerfil}) ${
                                                sinPerfil ? 'no-repeat center' : ''
                                            } `,
                                            backgroundSize: `${
                                                sinPerfil ? '' : 'cover'
                                            }`,
                                        }}>
                                        <img
                                            src="/assets/ico/ico_plus.svg"
                                            alt="plus"
                                            className="absolute left-0 right-0 m-auto -bottom-4"
                                        />
                                        <input
                                            id="image2"
                                            type="file"
                                            className="opacity-0"
                                            onChange={(e) => {
                                                cargaImagen(e);
                                            }}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                </div>

                <div className="md:w-[80%] grid md:grid-cols-2 grid-cols-1 gap-[2rem] mx-auto" >
                <div className="my-1">
                        {/* <p>Nombres</p> */}
                        <input
                            type="text"
                            placeholder="Nombres"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            name="globalUsuName"
                            value={curriculum.globalUsuName}
                            onChange={(e) => {
                                onChangeCurriculum(e);
                            }}
                        />
                </div>
                <div className="">
                        {/* <p>Apellido Paterno</p> */}
                        <input
                            type="text"
                            placeholder="Apellido Paterno"
                            name="globalUsuSurname"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            value={curriculum.globalUsuSurname}
                            onChange={(e) => {
                                onChangeCurriculum(e);
                            }}
                        />
                </div>
                <div className="flex items-center">
                        <Select
                            className="flex h-full"
                            styles={{
                                width: '114px',
                                borderRadius: '5px 0px 0px 5px',
                            }}
                            options={tipoDocumento}
                            onChange={(e) => {
                                onChangeCurriculumSelect(e, 'globalUsuTipoDoc');
                            }}
                            placeholder="Seleccionar"
                            value={tipoDocumento.find(
                                (x) => x.value === curriculum.globalUsuTipoDoc
                            )}
                        />

                        <div
                            className="comparasalario__group"
                            style={{ display: 'flex', flexGrow: 1 }}>
                            {/* <p>Número de documento</p> */}
                            <input
                                style={{
                                    borderRadius: '0px 8px 8px 0px',
                                    flexGrow: 1,
                                }}
                                type="text"
                                placeholder="Número de documento"
                                className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                                name="globalDocIdentidad"
                                value={curriculum.globalDocIdentidad}
                                onChange={(e) => {
                                    onChangeCurriculum(e);
                                }}
                                disabled={true}
                            />
                        </div>
                    </div>

                    {/* <p>Correo electrónico</p> */}
                    <input
                        type="text"
                        placeholder="Correo electrónico"
                        name="globalUsuEmail"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.globalUsuEmail}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    />

                    {/* <p>Teléfono Celular</p>
                    <input
                        type="text"
                        placeholder="Teléfono Celular"
                        name="globalUsuCellphone"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.globalUsuCellphone}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    /> */}

                    {/* <p>Fecha de nacimiento</p>
                    <input
                        type="date"
                        placeholder="Fecha de nacimiento"
                        name="globalBirthDate"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.globalBirthDate}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    /> */}

                    <div className="comparasalario__group">
                        <span className="text-[16px] block mb-2 font-semibold">
                            Género
                        </span>
                        <div
                            className="custom-radio"
                            style={{ fontSize: '15px', padding: '0em' }}>
                            <input
                                style={{ width: 'auto' }}
                                type="radio"
                                id="r-male"
                                name="globalGen"
                                value="1"
                                onChange={(e) => {
                                    onChangeCurriculum(e);
                                }}
                                checked={validaGenero.male}
                            />
                            <label>&nbsp;&nbsp;Masculino</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                style={{ width: 'auto' }}
                                type="radio"
                                id="r-fem"
                                name="globalGen"
                                value="2"
                                onChange={(e) => {
                                    onChangeCurriculum(e);
                                }}
                                checked={validaGenero.fem}
                            />
                            <span>&nbsp;&nbsp;Femenino</span>
                        </div>
                    </div>

                    {/* <div className="comparasalario__group">
                        <p>Dirección de domicilio</p>
                        <input
                            type="text"
                            placeholder="Dirección de domicilio"
                            name="globalAddress"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            value={curriculum.globalAddress}
                            onChange={(e) => {
                                onChangeCurriculum(e);
                            }}
                        />
                    </div> */}

                </div>
                
                <div className='w-[200px] mx-auto mt-[40px]'>
                <UIButton onClick={updateUserC} >Actualizar datos</UIButton>
                </div>


            </div>
        </div>
    </>
  )
}

export default Perfil