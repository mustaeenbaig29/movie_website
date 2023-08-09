import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../movies/Movies.css"

const Search = () => {
  const { query } = useParams();
  const [albums, setAlbums] = useState([]);
  const [notFound,setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8dab07aef2fca950266283df3d646046&language=en-US&query=${query}`);
        const jsonData = await response.json();
        if(jsonData.results.length === 0){
          setNotFound(true)
        } else{
          setNotFound(false); 
          setAlbums(jsonData.results);
        }
      } catch (error) {
        console.log('Error while loading:', error);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div>
      <h1>Search Results </h1>
      {notFound ? (
        <p>No movies found. Please check the spelling or try a different search.</p>
      ) : (
         <div class="cards">
        {albums.map(cur => {
            return  <div class="card">
         {cur.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${cur.poster_path}`} alt={cur.title} />
              ) : (
                <img src={"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}/>
              )}
          <div className='txt'>
            <h3>{cur.original_title}</h3>
            <p>Language: {cur.original_language}</p>
            <p>popularity: {cur.popularity}</p>
            <p>release_date: {cur.release_date}</p>
          </div>

        </div>
        })}
</div>
      )}
    </div>
  );
};

export default Search;
