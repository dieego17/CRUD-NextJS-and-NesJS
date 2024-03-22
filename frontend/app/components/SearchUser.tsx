import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchUser() {
    
    // Obtener los parámetros de búsqueda y la ruta actual
    const searchParams = useSearchParams();
    // Obtener la ruta actual
    const pathname = usePathname(); 
    // Obtener la función replace de useRouter
    const { replace } = useRouter();

    // Crear un callback debounced para manejar la búsqueda
    const handleSearch = useDebouncedCallback((query: string) => {
    // Crear un nuevo objeto URLSearchParams con los parámetros de búsqueda actuales
    const params = new URLSearchParams(searchParams);

    // Si el campo de búsqueda no está vacío, añadirlo a los parámetros de búsqueda
    if(query){
        /* .charAt(0).toUpperCase() + query.slice(1) */
        params.set('query', query);
    }else{
        // Si el campo de búsqueda está vacío, eliminar el parámetro de búsqueda
        params.delete('query');
    }

    // Actualizar la URL con los nuevos parámetros de búsqueda
    replace(`${pathname}?${params.toString()}`);
    }, 300);

    return(
        // Crear un campo de búsqueda controlado con el valor del parámetro de búsqueda 'query'
        <section className="flex h-20 rounded bg-blue-300 p-5 top-0 w-full">
            <input 
            defaultValue={searchParams.get('query')?.toString()} 
            onChange={(e) => handleSearch(e.target.value)} 
            className="h-10 flex-1 px-2 p-2 rounded-xl text-black" 
            placeholder="Buscar usuarios..." 
            type="query"  />
        </section>
    )
}