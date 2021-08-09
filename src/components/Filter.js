import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Form}from 'react-bootstrap';
const Filter=({search,rate,searchTerm,setSearchTerm,rating,setRating})=>{
    const onStarClick=(nextValue, prevValue, name)=>{
    setRating(nextValue);
    rate(nextValue);
    }
    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
    }
    return(
        <div>
            <Form style={{margin:'auto', width:'800px'}}>
            <Form.Control type="text" placeholder="Search" onChange={handleChange}  value = {searchTerm} />
            </Form>
            <div style={{textAlign:'center'}}>
            <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={onStarClick}
            emptyStarColor={'white'}
        />
        </div>
        </div>
    )
}
export default Filter;