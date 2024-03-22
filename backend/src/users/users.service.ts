import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {

    private user: User[] = [
        {
            id: '1',
            nombre: 'Juan',
            apellido: 'Perez',
            email: 'juanperez@correo.es'
        },
        {
            id: '2',
            nombre: 'Maria',
            apellido: 'Gomez',
            email: 'mariagomez@correo.es'
        },
        {
            id: '3',
            nombre: 'Carlos',
            apellido: 'Rodriguez',
            email: 'carlosrodriguez@correo.es'
        },
        {
            id: '4',
            nombre: 'Diego',
            apellido: 'Rubio',
            email: 'diegorubio@correo.es'
        }
    ]

    /* Devuelve todos los usuarios */
    getAllUsers() {
        return this.user;
    }

    /* Devuelve al usuario por su nombre */
    getOneUsersByName(nombre: string) {
        return this.user.filter(user => user.nombre === nombre);
        
    }

    /* Devuelve un solo usuario por su id */
    getUserByPk(id: string) {
        return this.user.filter(user => user.id === id);
    }

    /* Crea un nuevo usuario */
    createUser(user: User){
        this.user.push(user);
        return user;
    }
    /* Modifica un usuario */
    updateUser(id: string, user: User){
        const index = Number(id) - 1;
        return this.user[index] = user;

    }

    /* Borra un usuario */
    deleteUser(id: string){
        this.user =  this.user.filter(user => user.id != id);
    }
}


