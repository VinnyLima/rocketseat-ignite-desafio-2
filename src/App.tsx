import { useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content, GenreResponseProps } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        setGenres={setGenres}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
