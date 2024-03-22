'use client'

import { getAllUsers, getUserByName } from "../lib/data";
import { Users } from "../lib/definitions";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import SingleUser from "./SingleUser";

export default function UserList( { query } : {query: string} ) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getAllUsers();
            //console.log(users);
            setUsers(users);
        };
        fetchData();
    }, []); 

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUserByName(query);
            console.log(users);
            setUsers(users);
        };
        fetchData();
    }, []); 

    return (
        <section>
            <article className="flex flex-col items-center justify-between p-4">
                {
                    users.length > 0 ? (
                        users.map((user: Users) => (
                            <SingleUser key={Number(user.id)} user={user} />
                        ))
                    ) : (
                        <p>No hay usuarios disponibles.</p>
                    )
                }
            </article>
        </section>
    );
}