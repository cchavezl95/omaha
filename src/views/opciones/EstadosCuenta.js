import React, { useState,useContext, useEffect } from 'react'
import Select from 'react-select'
import { getDataUser } from '../../hooks/utilities'
import UIHeaderSub from '../../components/UIHeaderSub';
import AuthContext from '../../context/authContext';
import { getListPdf,getDocument } from '../../services/pdfServices';
import { PDFReader } from 'react-read-pdf'

const EstadosCuenta = () => {
    const {globalDataUser} = useContext(AuthContext);
    const [pdf,setPdf]= useState('');
    const [verRerporte,setVerReporte] = useState(false)
    const [msg,setMsg] = useState('')
    const [listaTemporada,setListaTemporada] = useState([])
    const [temporada,setTemporada]=useState('')
    const [listaPdfs,setListaPdfs] = useState([])
    
    const obtenerList = () =>{
        try{
            getListPdf(globalDataUser.globalDataUser.globalUsuId).then(
                res =>{
                    console.log(res)
                    let dataAux = []
                    for(const iterator of res){
                        if(dataAux.filter(x => x.value == iterator?.periodo).length == 0){
                            dataAux.push({value:iterator?.periodo,label:iterator?.periodo})
                            if(temporada == ''){
                                setTemporada(iterator?.periodo)
                            }
                        }
                    }
                    let listaAuxpdf = res.filter(x => x.periodo == dataAux[0].value)
                    setListaTemporada(dataAux)
                    setListaPdfs(listaAuxpdf)
                    if(listaAuxpdf.length===1){
                        getDoc(listaAuxpdf[0].id)
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
                    setPdf(res)
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
        console.log(e)
    }



    const mostrarReporte = (e) =>{
        let doc = getDataUser().globalDocIdentidad
        let tempAux = e.target.value
        let temp = tempAux.replace('-','')
        let url = `/assets/${doc}_${temp}.pdf`
        if(url == "/assets/07271049_202303.pdf"
        || url == "/assets/42554388_202301.pdf"
        || url == "/assets/42554388_202302.pdf" 
        || url == "/assets/42554388_202303.pdf"){
            setPdf(`${url}#navpanes=0&scrollbar=0`)
            setVerReporte(true)
            
        }else{
            setMsg('Sin Resultados')
            setVerReporte(true)
        }
    }

    useEffect(()=>{
        obtenerList();
    },[globalDataUser])

  return (
    <>
        <div className='p-6' >
            <UIHeaderSub title="Estado de cuenta" ></UIHeaderSub>
            <div className="p-4 mt-[30px] md:p-10 rounded-lg">
                <div className="md:w-full grid md:grid-cols-3 grid-cols-1 gap-[2rem] mx-auto" >
                    {/* <div>
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
                    </div> */}
                    <div>
                        <p className='mb-[5px] font-bold text-[16px] font-principal'>Temporada</p>
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
                <p className='mb-[5px] font-bold text-[16px] font-principal'>Estados Disponibles</p>
                    {
                     listaPdfs.map((element,i)=>{
                        return(
                            <div className='py-[8px] flex cursor-pointer' onClick={()=>{getDoc(element.id)}} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                {element.nombreArchivo}
                            </div>
                        )
                     })   
                    }
                </div>
                <div className='md:w-[80%] mx-auto mt-[60px]'>
                    
                    {
                        verRerporte && (
                            // <PDFReader data={window.atob(pdf.split('data:application/pdf;base64,')[1])} />
                            <embed
                            src={pdf}
                            type="application/pdf"
                            width="100%"
                            height="900px"
                            id='0'
                            >
                            </embed>
                        )
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export default EstadosCuenta