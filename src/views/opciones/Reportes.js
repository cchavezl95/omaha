import React from 'react'
import UIButton from '../../components/UIButton'

const CircleGraphic = ({ strokeDashoffset, name,color }) => {
    return (
      <div className="flex items-center flex-col justify-center overflow-hidden  bottom-5 right-5 shadow-md w-1/5 rounded-md">
        <svg width="200" height="200" viewBox="-20 -10 140 140" className="mt-10">
          <circle
            className="text-gray-300"
            strokeWidth="22"
            stroke="currentColor"
            fill="transparent"
            cx="50"
            cy="50"
            r="48"
          />
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke={color}
            strokeWidth="22"
            fill="none"
            strokeDasharray="315"
            strokeDashoffset={strokeDashoffset}
            strokemitterlimit="0"
            transform="rotate(-90 ) translate(-100 0)"
          />
        </svg>
        <div className="flex text-[13px] justify-between w-full p-3">
          <div className="flex items-center gap-1 mx-auto">
            <div className={`w-[12px] h-[12px] !bg-[${color}] rounded-full`}></div>
            <p>{name}</p>
          </div>
          {/* <div className="flex items-center gap-1">
            <div className="w-[12px] h-[12px] bg-gray-300 rounded-full"></div>
            <p>Sin {name}</p>
          </div> */}
        </div>
      </div>
    );
  };

const Reportes = () => {

    let graphic = [
        {value:60,name:'Porcentaje de ventas',color:'#407373'},
        {value:24,name:'Días transcurridos',color:'#6AA1A1'},
        {value:30,name:'Reparación',color:'#927F54'},
        {value:70,name:'Reemplazo',color:'#886262'},
    ]

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
            <div className='flex mt-[50px] mb-[80px]' >
                <div className='p-[10px] w-1/3' >
                   <div className='border-solid border rounded-lg text-center py-[10px]'>
                            <p className='text-slider font-bold font-principal text-[16px]'>Acumulado</p>
                            <div className='w-full flex mt-[20px]' >
                                <div className='w-1/2' >
                                    <p className='text-slider font-bold font-principal text-[36px]'>54K</p>
                                    <p className='text-[#927F54] font-principal text-[16px]'>Total de ventas</p>
                                </div>
                                <div className='w-1/2' >
                                <p className='text-slider font-bold font-principal text-[36px]'>16M</p>
                                    <p className='text-[#927F54] font-principal text-[16px]'>Σ Precio GE</p>
                                </div>
                            </div>
                    </div>         
                </div>
                <div className='p-[10px] w-1/3' >
                    <div className='border-solid border rounded-lg text-center py-[10px]'>
                            <p className='text-slider font-bold font-principal text-[16px]'>Promedio mes</p>
                            <div className='w-full flex mt-[20px]' >
                                <div className='w-1/2' >
                                    <p className='text-slider font-bold font-principal text-[36px]'>15K</p>
                                    <p className='text-[#927F54] font-principal text-[16px]'>Total de ventas</p>
                                </div>
                                <div className='w-1/2' >
                                <p className='text-slider font-bold font-principal text-[36px]'>5M</p>
                                    <p className='text-[#927F54] font-principal text-[16px]'>Σ Precio GE</p>
                                </div>
                            </div>
                    </div>        
                </div>
                <div className='p-[10px] w-1/3' >
                    <div className='border-solid border rounded-lg text-center py-[10px]'>
                                <div className='w-full flex mt-[20px]' >
                                    <div className='w-1/2' >
                                    <p className='text-slider font-bold font-principal text-[16px]'>Mayor Venta</p>
                                        <p className='text-slider font-bold font-principal text-[36px]'>10K</p>
                                        <p className='text-[#927F54] font-principal text-[16px]'>San Miguel</p>
                                    </div>
                                    <div className='w-1/2' >
                                    <p className='text-slider font-bold font-principal text-[16px]'>Menor Venta</p>
                                    <p className='text-slider font-bold font-principal text-[36px]'>5K</p>
                                        <p className='text-[#927F54] font-principal text-[16px]'>Los Olivos</p>
                                    </div>
                                </div>
                        </div>        
                </div>
            </div>
        </div>
    </div>
    <div style={{backgroundColor:"rgba(169, 170, 165, 0.18)"}}
        className='py-[20px] px-[40px] h-auto'
    >
        <div className='text-black text-[40px] font-principal font-bold'>KPI</div>
        <div className="flex flex-wrap items-center justify-center gap-7 mt-10">
        {graphic.map((v, index) => (
          <CircleGraphic
            key={index}
            strokeDashoffset={-v.value}
            name={v.name}
            color={v.color}
          />
        ))}
        </div>
    </div>
    </>
  )
}

export default Reportes