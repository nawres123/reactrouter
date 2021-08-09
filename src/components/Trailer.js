import React from 'react';
import {Card} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import { Link} from 'react-router-dom';
import {Button}from 'react-bootstrap';  
const Trailer=(props)=>{
    const des=props.location.state.props
    return(
        <div>
            <Card style={{width:'600px', height:'600px', margin:'auto'}}>
            <Card.Body >
                <Card.Title>Description</Card.Title>
                <Card.Text>{des.description}
                <ReactPlayer width='520px' style={{margin:'20px'}} url={des.link}
                />
                <Link to={{pathname:'/'}} style={{display:'flex', justifyContent:'center',margin:'20px'}}>
                <Button>Back to home page</Button>    
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
export default Trailer;