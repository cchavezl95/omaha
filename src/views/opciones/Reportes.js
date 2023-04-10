import React from 'react'
import UIButton from '../../components/UIButton'

const Reportes = () => {
  return (
    <>
    <div className='p-6' >
        <div className='text-slider font-bold text-[24px] font-principal'>
            Reportes
        </div>
        <div className="mt-[30px] rounded-lg">
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start w-[85%]'>
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-[2rem] w-[85%]" >
                        <div>
                            <p className='mb-[5px] font-bold text-[10px] font-principal' >Línea de negocio</p>
                            <select className='w-full py-[5px] outline-none border-[1px] border-[#797D86] rounded-md px-[2px]'>
                                <option value="" defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-[5px] font-bold text-[10px] font-principal' >Nombre de tienda</p>
                            <select className='w-full py-[5px] outline-none border-[1px] border-[#797D86] rounded-md px-[2px]'>
                                <option value="" defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-[5px] font-bold text-[10px] font-principal' >Código de vendedor</p>
                            <select className='w-full py-[5px] outline-none border-[1px] border-[#797D86] rounded-md px-[2px]'>
                                <option value="" defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-[5px] font-bold text-[10px] font-principal' >Desde</p>
                            <input
                            type="date"
                            placeholder="Fecha de nacimiento"
                            name="fechaNacimiento"
                            className="w-full py-[5px] outline-none border-[1px] border-[#797D86] rounded-md px-[2px]"
                            // value={curriculum.fechaNacimiento}
                            onChange={(e) => {
                                // onChangeCurriculum(e);
                                // setVerReporte(true)
                            }}
                        />
                        </div>
                        <div>
                            <p className='mb-[5px] font-bold text-[10px] font-principal' >Hasta</p>
                            <input
                            type="date"
                            placeholder="Fecha de nacimiento"
                            name="fechaNacimiento"
                            className="w-full py-[5px] outline-none border-[1px] border-[#797D86] rounded-md px-[2px]"
                            // value={curriculum.fechaNacimiento}
                            onChange={(e) => {
                                // onChangeCurriculum(e);
                                // setVerReporte(true)
                            }}
                        />
                        </div>
                    </div> 
                </div>
                <div className='flex items-center'>
                    <UIButton>Limpiar Filtros</UIButton>
                </div>
            </div>
            <div className='flex' >
                <div className='p-[10px]' >
                   <div className='border-solid border'>
                    
                    </div>         
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reportes