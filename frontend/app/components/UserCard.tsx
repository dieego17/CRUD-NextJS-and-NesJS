'use client'

import {  getUserByName } from "../lib/data";
import { Users } from "../lib/definitions";
import SingleUser from "./SingleUser";
import { useUser } from "../context/useUser";
import { use, useState } from "react";

export default function UserList( { query } : {query: string} ) {

    const {users} = useUser();

    return (
        <section>
            <article className="flex flex-col items-center justify-between p-4">
                {
                    users.length > 0 ? (
                        users.map((user: Users) => (
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