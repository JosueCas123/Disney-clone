import { notFound } from "next/navigation";

interface Props {
    params: {
        term: string;
        
    }
}

export default function SearchPage({ params}:Props ) {
    const { term } = params;
    // notfound page en caso de que no se encuentre el termino de busqueda
    if (!term) notFound();

    // funcion para decodificar el termino de busqueda
    
    const termToUse = decodeURI(term)

  return (
    <div>
      <h1>Hello SearchPage: {termToUse}</h1>
    </div>
  );
}