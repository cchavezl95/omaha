import React, { useState } from 'react'
import Select from 'react-select'

const EstadosCuenta = () => {

    const tipoReporte = [
        {value:'DNI',label:'Tipo1'},
        {value:'CE',label:'Tip2'},
    ]

    const [verRerporte,setVerReporte] = useState(false)

  return (
    <>
        <div className='p-6' >
            <div className='text-slider font-bold text-[24px] font-principal'>
                Estado de cuenta
            </div>
            <div className="p-4 mt-[30px] md:p-10 rounded-lg">
                <div className="md:w-[80%] grid md:grid-cols-2 grid-cols-1 gap-[2rem] mx-auto" >
                    <div>
                    <p className='mb-[5px] font-bold text-[16px] font-principal'>Tipo de fondo</p>
                    <Select
                            className="flex h-full"
                            styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                    width:"100%",
                                    borderColor:"#797D86",
                                    height:"56.56px"
                                }),
                              }}
                            options={tipoReporte}
                            // onChange={(e) => {
                            //     onChangeCurriculumSelect(e, 'dicTipoDocumento');
                            // }}
                            placeholder="Seleccionar"
                            // value={tipoDocumento.find(
                            //     (x) => x.value === curriculum.dicTipoDocumento
                            // )}
                        />
                    </div>
                    <div>
                    <p className='mb-[5px] font-bold text-[16px] font-principal'>Mes</p>
                        <input
                            type="month"
                            placeholder="Fecha de nacimiento"
                            name="fechaNacimiento"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            // value={curriculum.fechaNacimiento}
                            onChange={(e) => {
                                // onChangeCurriculum(e);
                                setVerReporte(true)
                            }}
                        />
                    </div>
                </div>
                <div className='md:w-[80%] mx-auto mt-[60px]'>
                     {verRerporte && (
                        <embed
                        src="/assets/prueba.pdf"
                        type="application/pdf"
                        width="100%"
                        height="900px">
                        </embed>
                     )}       
                </div>
            </div>
        </div>
    </>
  )
}

export default EstadosCuenta