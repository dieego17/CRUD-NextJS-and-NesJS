'use client'

import { Users } from "../lib/definitions";
import SingleUser from "./SingleUser";
import { useUser } from "../context/useUser";
import SearchUser from "./SearchUser";
import { useSearchParams } from "next/navigation";

export default function UserList() {

    const {users} = useUser();
    
    const params = useSearchParams();
    const query = params.get('query');
    console.log(query);
    
    let filteredUsers = users;

    // Filtrar la lista de usuarios basándose en el parámetro "query"
    filteredUsers = query ? users.filter(user => user.nombre.toLowerCase().includes(query.toLowerCase())) : users;

    return (
        <section>
            <article className="mb-3">
                <SearchUser />
            </article>
            <article className="flex flex-col items-center justify-between p-4">
                {
                    filteredUsers.length > 0 ? (
                        filteredUsers.map((user: Users) => (
                            <SingleUser key={user.id} user={user} />
                        ))
                    ) : (
                        <p>No hay usuarios disponibles.</p>
                    )
                }
            </article>
        </section>
    );
}
