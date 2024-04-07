import { getDiscoverMovies } from "@/lib/getMovies";
import { CaruselBanner } from "./CaruselBanner";

interface Props {
    id?: string;
    keywords?: string;
}
export  const CaruselBannerWrapper =async ({id, keywords}:Props) => {
    const movies = await getDiscoverMovies(id, keywords);

  return (
   <CaruselBanner movies={movies} />
  )
}
