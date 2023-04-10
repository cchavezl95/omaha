import React,{ useState } from 'react'
import Select from 'react-select';
import '../opciones/perfil.css'
import UIButton from '../../components/UIButton';

const Perfil = () => {

    const [validaGenero, setValidaGenero] = useState({
        male: true,
        fem: false,
    });

    const onChangeCurriculumSelect = (e, name) => {
        setCurriculum({ ...curriculum, [name]: e.value });
    };

    const [curriculum, setCurriculum] = useState({
        idDatosPersonales: 0,
        idUsuario: 0,
        IdPlantillaAplicada: 1,
        dicCiudadResidencia: 0,
        dicDepartamento: 0,
        dicTipoDocumento: 0,
        dicProfesion: 0,
        dicAreaTrabajo: 0,
        dicAspiracionSalarial: 0,
        nombres: 'Cristoher',
        apellidoPaterno: 'Lazaro',
        apellidoMaterno: '',
        rutaFoto: '',
        identificacion: '12345678',
        correoElectronico: 'prueba@gmail.com',
        telefonoCelular: '987654321',
        direccionResidencia: 'Jr mar del plata 856',
        anosExperiencia: '',
        paisesTrabajar: '',
        redesSociales: '',
        descripcionPerfilProfesional: '',
        genero: '',
        movilidadLaboral: '',
        idiomaNivel: '',
        habilidades: '',
        fechaNacimiento: '',
        vigente: true,
        tipoTextoHV: '',
        colorHV: '',
    });

    const onChangeCurriculum = (e) => {
        setCurriculum({ ...curriculum, [e.target.name]: e.target.value });
        if (e.target.name === 'genero') {
            if (e.target.value === 'M') {
                validaGenero.male = true;
                validaGenero.fem = false;
            } else {
                validaGenero.male = false;
                validaGenero.fem = true;
            }
        }
    };

    const [imgPerfil, setImgPerfil] = useState('/assets/img/img_profile.svg');
    const [sinPerfil, setSinPerfil] = useState(true);
    const tipoDocumento = [
        {value:'DNI',label:'DNI'},
        {value:'CE',label:'CE'},
    ]
    const cargaImagen = async (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        console.log(files[0])

        reader.onload = (e) => {
            // let form = {
            //     imagenBase64: e.target.result.split('base64,')[1],
            //     idImagen: e.target.result.split('base64,')[0] + 'base64,',
            //     tipoArchivo: 'imagen',
            // };

            // savePhotoCurriculum(getToken(), form).then((res) => {
            //     getPhoto();
            // });
            setImgPerfil(e.target.result);
            setSinPerfil(false);

        };
    };

  return (
    <>
        <div className='p-6' >
            <div className='text-slider font-bold text-[24px] font-principal'>
                    Información Básica
            </div>
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
                            name="nombres"
                            value={curriculum.nombres}
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
                            name="apellidoPaterno"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            value={curriculum.apellidoPaterno}
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
                                onChangeCurriculumSelect(e, 'dicTipoDocumento');
                            }}
                            placeholder="Seleccionar"
                            value={tipoDocumento.find(
                                (x) => x.value === curriculum.dicTipoDocumento
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
                                name="identificacion"
                                // value={curriculum.identificacion}
                                // onChange={(e) => {
                                //     onChangeCurriculum(e);
                                // }}
                            />
                        </div>
                    </div>

                    {/* <p>Correo electrónico</p> */}
                    <input
                        type="text"
                        placeholder="Correo electrónico"
                        name="correoElectronico"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.correoElectronico}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    />

                    {/* <p>Teléfono Celular</p> */}
                    <input
                        type="text"
                        placeholder="Teléfono Celular"
                        name="telefonoCelular"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.telefonoCelular}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    />

                    {/* <p>Fecha de nacimiento</p> */}
                    <input
                        type="date"
                        placeholder="Fecha de nacimiento"
                        name="fechaNacimiento"
                        className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                        value={curriculum.fechaNacimiento}
                        onChange={(e) => {
                            onChangeCurriculum(e);
                        }}
                    />

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
                                name="genero"
                                value="M"
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
                                name="genero"
                                value="F"
                                onChange={(e) => {
                                    onChangeCurriculum(e);
                                }}
                                checked={validaGenero.fem}
                            />
                            <span>&nbsp;&nbsp;Femenino</span>
                        </div>
                    </div>

                    <div className="comparasalario__group">
                        {/* <p>Dirección de domicilio</p> */}
                        <input
                            type="text"
                            placeholder="Dirección de domicilio"
                            name="direccionResidencia"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            value={curriculum.direccionResidencia}
                            onChange={(e) => {
                                onChangeCurriculum(e);
                            }}
                        />
                    </div>

                </div>
                
                <div className='w-[200px] mx-auto mt-[40px]'>
                <UIButton>Actualizar datos</UIButton>
                </div>


            </div>
        </div>
    </>
  )
}

export default Perfil