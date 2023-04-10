import { useContext } from "react"
import AuthContext from "../context/authContext"

const useAuth = () => {

    const {globalDataUser,globalAutenticado,globalCerrarSesion} = useContext(AuthContext)

  return {globalAutenticado,globalDataUser,globalCerrarSesion}
}

export default useAuth