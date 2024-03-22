'use client'

import UserCard from "./UserCard";

export default function UserList( {
    searchParams
}:{
    searchParams?: {
        query?: string;
    }
} ) {

    const query = searchParams?.query || ''; 


    return (
        <section>
            <h1 className="text-2xl flex flex-col items-center justify-between p-4">Todos los Usuarios</h1>
            <article className="flex flex-col items-center justify-between p-4">
                <UserCard  query={query}   />        
            </article>
        </section>
    );
}