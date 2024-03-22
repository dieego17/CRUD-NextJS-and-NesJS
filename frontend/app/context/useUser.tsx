import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUser = () =>{
    const contexto = useContext(UserContext)

    if(!contexto){
        throw new Error('useUser debe estar dentro del proveedor UserProvider')
    }else{
        return contexto
    }
}