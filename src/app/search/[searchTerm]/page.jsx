import Results from "@/components/Results";
import React from "react";

const getDataSearch = async (search) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}&language=en-US&include_adult=false`
  );
  return await res.json();
};

const SearchPage = async ({ params }) => {
  const data = await getDataSearch(params.searchTerm);
  const results = data.results;
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold ">Search &quot;{params.searchTerm}&quot;</h1>
      {results && results.length > 0 ? (
        <Results results={results} />
      ) : (
        <h1>No results found</h1>
      )}
    </div>
  );
};

export default SearchPage;
