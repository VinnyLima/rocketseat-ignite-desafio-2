import React, { useEffect, useState, FC } from "react";
import { Button } from "../components/Button";
import { GenreResponseProps } from "../components/Content";
import { api } from "../services/api";

interface sideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  setGenres: (genres: GenreResponseProps[]) => void;
}

const SideBar: FC<sideBarProps> = ({
  setGenres,
  setSelectedGenreId,
  genres,
  selectedGenreId,
}) => {
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export { SideBar };
