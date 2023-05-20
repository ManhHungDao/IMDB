import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/Ai";

const Card = ({ item }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200 group">
      <Link href={`/movie/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            item.backdrop_path || item.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-200 pb-2"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
          style={{ width: "100%", height: "auto" }}
        />
        <p className="text-ellipsis line-clamp-2 text-sm">{item.overview}</p>
        <p className="font-bold truncate">{item.title}</p>
        <p className="flex justify-between items-center">
          <span>{item.release_date}</span>
          <span className="flex items-center justify-between gap-1">
            <AiOutlineLike className="" />
            {item.vote_count}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
