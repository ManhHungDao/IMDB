import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results &&
        results.map((results) => {
          return <div key={results.id}>{results.original_title}</div>;
        })}
    </div>
  );
};

export default Results;
