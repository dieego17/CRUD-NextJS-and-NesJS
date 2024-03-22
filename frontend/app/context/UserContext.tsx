import { createContext, useEffect, useState } from 'react';
import { createUser, deleteUser, getAllUsers, getOneUser, updateUserFetch } from '../lib/data';
import { Users, modifyUser, nuevoUser } from '../lib/definitions';

interface UserContextValue {
    users: Users[];
    crearUser: (user: nuevoUser) => Promise<void>;
    borrarUser: (id: string) => Promise<void>;
}

export const UserContext = createContext<UserContextValue>({
    users: [],
    crearUser: async () => {},
    borrarUser: async () => {},
});

interface Props{
    children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {

    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getAllUsers();
            //console.log(users);
            setUsers(users);
        };
        fetchData();

    }, []); 

    const crearUser = async (user: nuevoUser) => {
        const res = await createUser(user);
        setUsers([...users, res]);
    }

    const borrarUser = async (id: string) => {
        const res = await deleteUser(id);
        console.log(res);
        setUsers(users.filter((user) => user.id !== id));
    }

    return(
        <UserContext.Provider value={{ users, crearUser, borrarUser }}>
            {children}
        </UserContext.Provider>
    )

}

