import { SearchResults } from "@/interface/dbdata";

export async function fetchFromTMB(url: URL, cacheTime?: number) {
  
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("language", "en");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN_API}`
        },
        next: {
            revalidate: cacheTime ?? 60 * 60 * 24
        }
    }
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;
    
    return data;
}

export async function getUpComingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");

    const data = await fetchFromTMB(url);
    return data.results;
}

export async function getToRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");

    const data = await fetchFromTMB(url);
    return data.results;
}

export async function getDiscoverMovies(id?: string, keyword?:string) {
    const url = new URL("https://api.themoviedb.org/3/discover/movie");

    keyword && url.searchParams.set("with_keywords", keyword);
    id && url.searchParams.set("with_genres", id);
    const data = await fetchFromTMB(url);
    return data.results;
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTMB(url);
  
    return data.results;
  }
export async function getSearchMovies(keyword: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    url.searchParams.set("query", keyword);
    const data = await fetchFromTMB(url);
    return data.results;
}