import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter'
import Trailer from './components/Trailer';
import React,{useState} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [rating,setRating] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [movies,setMovies] = useState([
{id:1,
title:"Smelliville",
description:"The Ogglies are looking for a new home. They end up in Smelliville, a beautiful and peaceful village. Unfortunately, Smelliville has a stinky problem: The local garbage dump is spoiling the place. Something must be done",
posterUrl:"https://i.egycdn.com/pic/REl4amNJYUllY21IY21qbVlqbWJtZWN3VEVtSXhtbW1FdmNtdg.jpg",
rating:4,
link:"https//www.youtube.com/watch?v=AwjH10neIr0",
},
{id:2,
title:"Spirit Riding Free",
description:"Lucky Prescott's life is changed forever when she moves from her home in the city to a small frontier town and befriends a wild mustang named Spirit.",
posterUrl:"https://m.media-amazon.com/images/I/71JQH4zlETL._SL1500_.jpg",
rating:5,
link:"https://www.youtube.com/watch?v=bxCCU9O1VEY",
},
{id:3,
title:"Space Jam: A New Legacy",
description:"A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
posterUrl:"https://img3.cdn.cinoche.com/images/6ed335af74eb6e50f1c8612b24ac84da.jpg",
rating:5,
link:"https://www.youtube.com/watch?v=olXYZOsXw_o",
},
{id:4,
title:"Harry Potter and the deathly hallows:Part2",
description:"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
posterUrl:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
rating:3,
link:"https://youtu.be/5NYt1qirBWg",
},
{id:5,
title:"Hacksaw Ridge",
description:"World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
posterUrl:"https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
rating:2,
link:"https://youtu.be/s2-1hz1juBI",
},
]
)
const add=(M)=>setMovies([...movies,M]);
const getRating=(ValueRating)=>(setRating(ValueRating))

  return (
    <div>
      <header><h3 style={{color:'red',textAlign:'center'}}>Top Movies</h3></header>
        <Switch>
          <Route exact={true} path="/"             
              render={()=> <div>
              <Filter rate={getRating} searchTerm={searchTerm} setSearchTerm={setSearchTerm} rating={rating} setRating={setRating}/>
              <AddMovie add={add}/>
              <MovieList 
                searchTerm={searchTerm} 
                rating={rating}
                movies={movies}/> 
              </div>}
              >
          </Route>
          <Route path='/Trailer' component={Trailer}>
          </Route>
        </Switch>

    </div>
  );

}

export default App;
