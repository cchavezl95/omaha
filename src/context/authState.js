import React,{useEffect, useReducer} from "react"
import AuthReducer from "./authReducer"
import AuthContext from "./authContext"
import { useNavigate,useLocation } from "react-router-dom";
import { getDataUser, isactive } from "../hooks/utilities";

const AuthState = (props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [state, dispatch] = useReducer(AuthReducer, {
        globalDataUser: {
          globalUsuId: "",
          globalUsuName: "",
          globalUsuSurname: "",
          globalUsuCellphone: "",
          globalUsuEmail: "",
          globalUsuRole: "",
          globalBirthDate : "",
          globalAddress : "",
          globalGen : "",
          globalUsuTipoDoc: "",
          globalDocIdentidad: "",
        },
        globalToken: "",
        globalAutenticado: false, // por defecto debe ser FALSE
      });

    const globalIniciarSesion = (login) => {
        dispatch({
          action: "INICIAR_SESION",
          data: login,
        });
      };
    
    const globalCerrarSesion = () => {
        localStorage.clear();
        sessionStorage.clear();
        //llamaTagManager();
        dispatch({
          action: "CERRAR_SESION",
        });
        // console.log('cierre de sesion')
        navigate("/inicia");
      };

      const validarLogueo = () =>{
        if(isactive()){
          let dataUser = getDataUser();
          globalIniciarSesion({
            globalDataUser : dataUser,
            globalAutenticado : true,
          })
          if (pathname.includes("/auth")) {
            navigate(pathname);
          } else {
            navigate("/auth");
          }
        }
      }

      useEffect(()=>{
        validarLogueo();
      },[])

      return(
        <AuthContext.Provider
            value={{
                globalDataUser: state.globalDataUser,
                globalAutenticado: state.globalAutenticado,
                globalIniciarSesion,
                globalCerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
      );

}

export default AuthState;