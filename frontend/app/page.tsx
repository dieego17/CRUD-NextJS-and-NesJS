'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function Home() {

  // Obtener los parámetros de búsqueda y la ruta actual
  const searchParams = useSearchParams();
  // Obtener la ruta actual
  const pathname = usePathname(); 
  // Obtener la función replace de useRouter
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    // Crear un nuevo objeto URLSearchParams con los parámetros de búsqueda actuales
    const params = new URLSearchParams(searchParams);

    // Si el campo de búsqueda no está vacío, añadirlo a los parámetros de búsqueda
    if(query){
      params.set('query', query.charAt(0).toUpperCase() + query.slice(1));
    }else{
      // Si el campo de búsqueda está vacío, eliminar el parámetro de búsqueda
      params.delete('query');
    }

    // Actualizar la URL con los nuevos parámetros de búsqueda
    replace(`${pathname}?${params.toString()}`);
  }


  return (
    <div>
      <section className="flex h-20 rounded bg-blue-300 p-5 top-0 w-full">
          {/* Crear un campo de búsqueda controlado con el valor del parámetro de búsqueda 'query' */}
          <input 
          defaultValue={searchParams.get('query')?.toString()} 
          onChange={(e) => handleSearch(e.target.value)} 
          className="h-10 flex-1 px-2 p-2 rounded-xl text-black" 
          placeholder="Buscar usuarios..." 
          type="query"  />
      </section>
      <section className="flex justify-between items-baseline">
        <article className="w-2/4 p-4 m-2 rounded-lg">
          <UserList  /> 
        </article>
        <article className="w-2/4 p-4 m-2  rounded-lg">
          <UserForm />
        </article>
      </section>
    </div>
    
  );
}
