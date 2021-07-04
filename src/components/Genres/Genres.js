import { Chip } from "@material-ui/core";
import axios from "axios";
//import "./Genres.css";
import { useEffect } from "react";
const Genres = ({chosengenres,setchosengenres,genres,setgenres,type,setPage,}) => {
    const handleAdd = (genre) => {
        setchosengenres([...chosengenres, genre]);
        setgenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setchosengenres(
          chosengenres.filter((selected) => selected.id !== genre.id)
        );
        setgenres([...genres, genre]);
        setPage(1);
      };
    
      const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setgenres(data.genres);
      };
    
      useEffect(() => {
        fetchGenres();
    
        return () => {
          setgenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);
    
      return (
        <div style={{ padding: "6px 0" }}>
          {chosengenres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              color="primary"
              clickable
              size="small"
              onDelete={() => handleRemove(genre)}
            />
          ))}
          {genres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              clickable
              size="small"
              onClick={() => handleAdd(genre)}
            />
          ))}
        </div>
      );
    };
    
export default Genres;
