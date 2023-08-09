import React, { useEffect, useState } from 'react'
import "./Movies.css"

const Movies = () => {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=8dab07aef2fca950266283df3d646046&language=en-US&query=star%20war")
                const jsonData = await response.json()
                setMovie(jsonData.results.slice(1,5))
            } catch (error) {
                console.log("Error while loading", error)
            }
        }

        getMovies()
    }, [])
    

  return (
    <div className='movies'>
     <h1>Movies For You !</h1>
     <hr/>
     <div class="cards">
        {movie.map(cur => {
            return  <div class="card">
         <img
           src={cur.poster_path ? `https://image.tmdb.org/t/p/w500/${cur.poster_path}` : 'path-to-placeholder-image'}
            alt={cur.title}
          />
          <div className='txt'>
            <h3>{cur.original_title}</h3>
            <p>Language: {cur.original_language}</p>
            <p>popularity: {cur.popularity}</p>
            <p>release_date: {cur.release_date}</p>
          </div>

        </div>
        })}
</div>
    </div>
  )
}

export default Movies
