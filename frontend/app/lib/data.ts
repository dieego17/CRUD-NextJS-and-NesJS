

import { modifyUser, nuevoUser } from "./definitions";
import { v4 as uuidv4 } from 'uuid';

const apiUrl = process.env.NEXT_PUBLIC_API;

export async function getAllUsers() {

    const response = await fetch(`http://localhost:3001/users/`);
    const data = await response.json();
    return data;
}

export async function getOneUser(id : string) {
    const response = await fetch(`http://localhost:3001/users/${id}`);
    const data = await response.json();
    return data;
}

export async function getUserByName(name : string) {
    const response = await fetch(`http://localhost:3001/users/${name}`);
    const data = await response.json();
    return data;
}

export async function createUser(newUser : nuevoUser) {
    
    // Asignar un ID aleatorio al nuevo usuario
    newUser.id = uuidv4();
    
    const response = await fetch(`http://localhost:3001/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });

    if (!response.ok) {
        // Si la respuesta no es correcta, lanzar un error con el mensaje de error
        const errorMessage = `Error al crear usuario: ${response.statusText}`;
        throw new Error(errorMessage);
    }

    // Si la respuesta es correcta, devolver los datos
    const data = await response.json();
    return data;
}

export async function deleteUser(id : string) {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        // Si la respuesta no es correcta, lanzar un error con el mensaje de error
        const errorMessage = `Error al eliminar usuario: ${response.statusText}`;
        throw new Error(errorMessage);
    }

    // Si la respuesta es correcta, devolver los datos
    return console.log("Usuario eliminado");
}

export async function updateUserFetch(id : string, updatedUser : Omit<modifyUser, 'id'>) {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
        // Si la respuesta no es correcta, lanzar un error con el mensaje de error
        const errorMessage = `Error al actualizar usuario: ${response.statusText}`;
        throw new Error(errorMessage);
    }

    // Si la respuesta es correcta, devolver los datos
    const data = await response.json();
    return data;
}