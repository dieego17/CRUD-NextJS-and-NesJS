export type Users = {
  id: string
  nombre: string;
  apellido: string;
  email: string;
};

export type nuevoUser = {
  id: string
  nombre: string;
  apellido: string;
  email: string;
}

//los campos no son obligatorios
export type modifyUser = {
  id: string 
  nombre?: string;
  apellido?: string;
  email?: string;
}
