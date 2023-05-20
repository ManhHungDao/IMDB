import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const getDataMovie = async (genre) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  return await res.json();
};

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const data = await getDataMovie(genre);
  return (
    <>
      <Results results={data.results} />
    </>
  );
}
