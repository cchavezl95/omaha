const AuthReducer = (state, payload) => {
    switch (payload.action) {
        case "INICIAR_SESION":
            return {
                ...state,
                globalDataUser: payload.data,
                globalAutenticado: true,
            }
        case "CERRAR_SESION":
            return {
                ...state,
                globalDataUser : {
                    globalUsuId: "",
                    globalUsuName: "",
                },
                globalAutenticado: false,
            }
        default:
            return state;
    }
}
export default AuthReducer;