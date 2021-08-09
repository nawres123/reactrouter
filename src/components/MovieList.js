import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList=({movies,searchTerm,rating,match})=>{
    const filtering=(movies)=>movies.filter(m=>m.title.toUpperCase().includes(searchTerm.toUpperCase().trim())&& m.rating>=rating)
    return(

        <div className='List'>
        {filtering(movies).map((movie,index)=>(

            <MovieCard  
            id={movie.id}
            title={movie.title} 
            description={movie.description} 
            posterUrl={movie.posterUrl} 
            rating={movie.rating}
            link={movie.link}/>

        ))}
        </div>
    )
}
export default MovieList;
