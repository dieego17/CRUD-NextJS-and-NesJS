'use client'

import { ChangeEvent, FormEvent, use, useState } from "react";
import { useUser } from "../context/useUser";

export default function UserForm() {

    const [user, setUsuarios] = useState({
        id: "",
        nombre: "",
        apellido: "",
        email: ""
    })

    const {crearUser} = useUser();

    const handleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        setUsuarios({...user, [event.target.name] : event.target.value})
    }

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        crearUser(user)
    }

    return(
        <article>
                <h2 className="text-2xl flex flex-col items-center justify-between">Crear Nuevo Usuario</h2>         
                <form onSubmit={handleSubmit} className="m-4">
                    <div className="m-3"> 
                        <label className="" htmlFor="nombre">
                            Nombre
                        </label>
                        <div className="mt-1">
                            <input onChange={handleChange} className="rounded p-1 w-full text-black" name="nombre" type="text" />
                        </div>
                    </div>
                    <div className="m-3">
                        <label className="pb-4" htmlFor="apellido">
                            Apellidos
                        </label>
                        <div className="mt-1">
                            <input onChange={handleChange} className="rounded p-1 w-full text-black" name="apellido" type="text" />
                        </div>
                    </div>
                    <div className="m-3">
                        <label className="pb-4" htmlFor="email">
                            Email
                        </label>
                        <div className="mt-1">
                            <input onChange={handleChange} className="rounded p-1 w-full text-black" name="email" type="text" />
                        </div>
                    </div>
                    <button className="border w-full rounded p-1 mt-2 hover:bg-green-400 bg-green-500" type="submit">Crear</button>
                </form>
        </article>
    )
}
