import { CaruselBannerWrapper } from "@/components/CaruselBannerWrapper";
import { MovieCarusel } from "@/components/MovieCarusel";
import { Button } from "@/components/ui/button";
import {getPopularMovies, getToRatedMovies, getUpComingMovies } from "@/lib/getMovies";
import Image from "next/image";

 export  default async function Home() {

  const upcomingMovies = await getUpComingMovies();
  const topRatedMovies = await getToRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
     
      {/* carusel Banner Wrapper */}
      <CaruselBannerWrapper/>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        
        <MovieCarusel title="Upcoming" movies={upcomingMovies} />      
        <MovieCarusel movies={topRatedMovies} title="Top Rated" />
        <MovieCarusel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
