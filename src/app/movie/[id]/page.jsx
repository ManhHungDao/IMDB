import Image from "next/image";
import React from "react";

const getDetailMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 10000 } }
  );
  return await res.json();
};

const Movie = async ({ params }) => {
  const movieId = params.id;
  const data = await getDetailMovie(movieId);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row p-4 md:pt-8 items-center justify-center xl:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ width: "100%", height: "100%" }}
          alt="image is not available"
        />
        <div className="space-y-4">
          <h2 className="font-bold text-lg">
            {data.title}
          </h2>
          <p>{data.overview}</p>
          <p className="font-bold"> Date Released: {data.release_date}</p>
          <p className="font-bold"> Rating: {data.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
