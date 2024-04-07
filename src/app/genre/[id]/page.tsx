import { MovieCarusel } from "@/components/MovieCarusel";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props {
    params: {
        id: string;
    },
    searchParams: {
        genre: string;
    }

}

export default async function GenrePage({ params:{id}, searchParams:{genre} }: Props)  {

  const movies = await getDiscoverMovies(id);
    

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className=" text-6xl font-bold px-10">
            Results for {genre}
        </h1>
        <MovieCarusel movies={movies} title={genre} isVertical />
      </div>
    </div>
  );
}