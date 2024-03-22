import React, { use } from 'react';
import { Users, modifyUser } from '../lib/definitions';
import { deleteUser } from '../lib/data';
import Link from 'next/link';
import { useUser } from '../context/useUser';


interface UserCardProps {
    user: Users;
}

export default function SingleUser({ user }: UserCardProps) {

    const {borrarUser} = useUser();

    const deleteUser = async (id : string) =>{
        const res = await borrarUser(id);
    }

    return (
        <div className="p-2 flex items-center border b-gray-950 w-full m-2 rounded justify-between" key={user.id}>
            <h2>{user.nombre} {user.apellido}</h2>
            <h2 className="p-6">{user.email}</h2>
            <div className="m-2 p-2 flex items-center justify-between">
                <button onClick={() =>{
                    if(confirm("¿Estás seguro de que deseas eliminar este usuario?")){
                        deleteUser(user.id)
                    }
                    }} className="border rounded m-1 p-1 text-white hover:bg-red-300 bg-red-500" type="submit">Eliminar</button>
                {/* <button  onClick={() =>{actualizarUser(user.id, user)}}  type="submit">Editar</button> */}
                <Link className="border rounded m-1 p-1 bg-orange-500 hover:bg-orange-300 text-white" href={`/updateUser/?id=${user.id}`}>
                    Editar
                </Link>
            </div>
        </div>
    );
}