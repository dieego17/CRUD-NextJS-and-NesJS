'use client'

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getOneUser, updateUserFetch } from "../lib/data";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function updateUser() {

    const router = useRouter();
    const url = useSearchParams();
    const data = url.get("id");


    const [user, setUser] = useState(null);

    const [usuarios, setUsuarios] = useState({
        id: data,
        nombre: "",
        apellido: "",
        email: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneUser(data);
            setUser(res);
        };
        if (data) {
            fetchData();
        }
    }, [data]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuarios({ ...usuarios, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await updateUserFetch(data, usuarios);
        router.push("/");

    };

    return (
        <section>
            <article>
                <div className="flex justify-between">
                    <h2 className="text-2xl flex flex-col items-center justify-between">Modificar Usuario</h2>
                    <Link className="border rounded bg-gray-500 p-1" href={"/"}>
                        Volver
                    </Link>
                </div>
                {user && user.map(use => (
                    <form key={use.id} onSubmit={handleSubmit} className="m-4">
                        <div className="m-3">
                            <label className="" htmlFor="nombre">
                                Nombre
                            </label>
                            <div className="mt-1">
                                <input onChange={handleChange} className="rounded p-1 w-full text-black" placeholder={use.nombre} name="nombre" type="text" />
                            </div>
                        </div>
                        <div className="m-3">
                            <label className="pb-4" htmlFor="apellido">
                                Apellidos
                            </label>
                            <div className="mt-1">
                                <input onChange={handleChange} className="rounded p-1 w-full text-black" placeholder={use.apellido} name="apellido" type="text" />
                            </div>
                        </div>
                        <div className="m-3">
                            <label className="pb-4" htmlFor="email">
                                Email
                            </label>
                            <div className="mt-1">
                                <input onChange={handleChange} className="rounded p-1 w-full text-black" placeholder={use.email} name="email" type="text" />
                            </div>
                        </div>
                        <button className="border w-full mt-3 p-1 rounded hover:bg-green-300 bg-green-500" type="submit">Actualizar</button>
                    </form>
                ))}
            </article>
        </section>
    );
}
