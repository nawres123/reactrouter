import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Link} from 'react-router-dom';
import {Button}from 'react-bootstrap';
const MovieCard=(props)=>{
    return(
        <div>
        <Card style={{width:'300px', height:'800px', margin:'30px'}}>
            <Card.Img variant="top" src={props.posterUrl}/>
            <Card.Body >
                <Card.Title style={{height:'50px',textAlign:'center'}}>Movie Title: {props.title}</Card.Title>
                <br/>
                <Link to={{pathname:'/Trailer',state:{props}}} style={{display:'flex', justifyContent:'center'}}>
                <Button>Description</Button>
                </Link>
                <br/>
                <Card.Text style={{textAlign:'center'}}>
                    <h5>Rating</h5>
                <StarRatingComponent value={props.rating}/>
                </Card.Text>    
            </Card.Body>
        </Card>
    </div>
    )
}
export default MovieCard;