import { MovieCarusel } from "@/components/MovieCarusel";
import { getPopularMovies, getSearchedMovies,  } from "@/lib/getMovies";
import { notFound } from "next/navigation";

interface Props {
    params: {
        term: string;
        
    }
}

export default async function SearchPage({ params}:Props ) {
    const { term } = params;
    // notfound page en caso de que no se encuentre el termino de busqueda
    if (!term) notFound();

    // funcion para decodificar el termino de busqueda
    
    const termToUse = decodeURI(term)

    const movies = await getSearchedMovies(termToUse);

    const popularMovie = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">

     
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        <MovieCarusel
          title='Movies'
          movies={movies}
          isVertical
        />
        <MovieCarusel
          title='Popular Movies'
          movies={popularMovie}
        />

      </div>
    </div>
  );
}