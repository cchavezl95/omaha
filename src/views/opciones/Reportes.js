import React, { useState,useContext, useEffect } from 'react'
import Select from 'react-select'
import UIHeaderSub from '../../components/UIHeaderSub';
import AuthContext from '../../context/authContext';
import { getListPdf,getDocument, getPeriodoReportes, getTipoFondo, getListPdfReportes, getDocumentReporte } from '../../services/pdfServices';
import UIButton from '../../components/UIButton';

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
 const {globalDataUser} = useContext(AuthContext);
    const [pdf,setPdf]= useState('');
    const [verRerporte,setVerReporte] = useState(false)
    // const [msg,setMsg] = useState('')
    const [listaTemporada,setListaTemporada] = useState([])
    const [temporada,setTemporada]=useState('')
    const [listaTipoFondo,setListaTipoFondo] = useState([])
    const [tipoFondo,setTipoFondo]=useState('')
    const [listaPdfs,setListaPdfs] = useState([])
    const [fileNameText,setFileNameText] = useState('')
    const [listaTotal,setListaTotal] = useState([])
    const descargar = () => {
        const downloadLink = document.createElement("a");
        const fileName = fileNameText;
    
        downloadLink.href = pdf;
        downloadLink.download = fileName;
        downloadLink.click();
      };
    
    
    const obtenerList = () =>{
        try{
            getListPdf(globalDataUser.globalDataUser.globalUsuId).then(
                res =>{
                    setListaTotal(res)
                    let dataAux = []
                    for(const iterator of res){
                        if(dataAux.filter(x => x.value === iterator?.periodo).length === 0){
                            dataAux.push({value:iterator?.periodo,label:iterator?.periodo})
                        }
                    }
                    let listaAuxpdf = res.filter(x => x.periodo === dataAux[0].value)
                    setTemporada(dataAux[0].value)
                    setListaTemporada(dataAux)
                    setListaPdfs(listaAuxpdf)
                    if(listaAuxpdf.length===1){
                        getDoc(listaAuxpdf[0].id)
                        setFileNameText(listaAuxpdf[0].nombreArchivo)
                    }
                }
            ).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    const getDoc = (id) =>{
        try{
            getDocument(id).then(
                res =>{
                    setPdf(`data:application/pdf;base64,${res}`)
                    setVerReporte(true)
                }
            ).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    const OnclickTemporada = (e) =>{
        setTemporada(e.value)
        getListPdfReportes(tipoFondo,e.value).then(
            res=>{
                setListaPdfs(res)
                if(res.length === 1){
                    getDocumentReporte(res[0].id)
                    setFileNameText(res[0].nombreArchivo)
                    getDoc(res[0].id)
                }
            }
        ).catch(err=>{
            console.log(err)
        });
    }

    const GetFiltros = (e) =>{
        getPeriodoReportes().then(res =>{
            let dataAux = []
                    for(const iterator of res){
                        if(dataAux.filter(x => x.value === iterator).length === 0){
                            dataAux.push({value:iterator,label:iterator})
                        }
                    }
            setListaTemporada(dataAux)
        }).catch(err=>{
            console.log(err)
        });
        getTipoFondo().then(res =>{
            let dataAux = []
                    for(const iterator of res){
                        if(dataAux.filter(x => x.value === iterator).length === 0){
                            dataAux.push({value:iterator,label:iterator})
                        }
                    }
            setListaTipoFondo(dataAux)
        }).catch(err=>{
            console.log(err)
        });
    }

    useEffect(()=>{
        // obtenerList();
        GetFiltros()
    },[globalDataUser])

  return (
    <>
        <div className='p-6' >
            <UIHeaderSub title="Reportes" ></UIHeaderSub>
            <div className="p-4 mt-[30px] md:p-10 rounded-lg">
                <div className="md:w-full grid md:grid-cols-3 grid-cols-1 gap-[2rem] mx-auto" >
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
                            options={listaTipoFondo}
                            placeholder="Seleccionar"
                            value={listaTipoFondo.find(
                                x => x.value === tipoFondo
                            )}
                            onChange={(e)=>{setTipoFondo(e.value)}}
                        />
                    </div>
                    <div>
                        <p className='mb-[5px] font-bold text-[16px] font-principal'>Periodo(año-mes)</p>
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
                            options={listaTemporada}
                            placeholder="Seleccionar"
                            value={listaTemporada.find(
                                x => x.value === temporada
                            )}
                            onChange={(e)=>{OnclickTemporada(e)}}
                        />
                    </div>
                    {/* <div>
                    <p className='mb-[5px] font-bold text-[16px] font-principal'>Mes</p>
                        <input
                            type="month"
                            placeholder="Fecha de nacimiento"
                            name="fechaNacimiento"
                            className="w-full py-[.9rem] outline-none border-[1px] border-[#797D86] rounded-md px-[1.5rem]"
                            // value={curriculum.fechaNacimiento}
                            onChange={(e) => {
                                // onChangeCurriculum(e);
                                //setVerReporte(true)
                                mostrarReporte(e)
                            }}
                        />
                    </div> */}
                </div>
                <div className='w-full mt-[20px]' >
                <p className='mb-[5px] font-bold text-[16px] font-principal'>Estados de Cuenta</p>
                    {
                     listaPdfs.map((element,i)=>{
                        return(
                            <div key={i} className='py-[8px] flex cursor-pointer' onClick={()=>{getDoc(element.id);setFileNameText(element.nombreArchivo)}} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                {element.nombreArchivo}
                            </div>
                        )
                     })   
                    }
                </div>
                <div  className='md:w-[80%] mx-auto mt-[60px]'>
                    
                    {
                        verRerporte && (
                            // <PDFReader data={window.atob(pdf.split('data:application/pdf;base64,')[1])} />
                            <>
                            <div className='w-[200px] mx-auto mt-[40px] mb-[20px]'>
                                <UIButton onClick={descargar}>Descargar</UIButton>
                            </div>
                            <embed
                            src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=80`}
                            type="application/pdf"
                            width="100%"
                            height="900px"
                            id='dasdas'
                            >
                            </embed>
                            </>
                            
                        )
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export default Reportes