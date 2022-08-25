import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
    // console.log(data);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres?.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          color="primary"
          size="small"
          clickable
          label={genre.name}
          key={genre.id}
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres &&
        genres?.map((genre) => (
          <Chip
            style={{ color: "white", margin: 2 }}
            size="small"
            clickable
            label={genre.name}
            variant="outlined"
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
