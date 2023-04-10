import React from "react";
import useAuth from "../hooks/useAuth"
import { Navigate } from "react-router-dom";

const RouterPrivate = ({ children }) => {
    const { globalAutenticado } = useAuth();
    console.log(globalAutenticado)
    return globalAutenticado ? children : <Navigate to="/inicio" />;
}

export default RouterPrivate