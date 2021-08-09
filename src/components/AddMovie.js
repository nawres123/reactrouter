import React,{useState}from 'react';
import {Button,Modal}from 'react-bootstrap';
const AddMovie=({add})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[mymovie,setMymovie]=useState({
        title:'',
        posterUrl:'',
        description:'',
        rating:''
    });
    const handleChange=(e)=>{setMymovie({...mymovie,[e.target.name]:e.target.value});};
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <Button variant='primary' onClick={handleShow}>Add Movie</Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            
            <Modal.Title>Add Movie</Modal.Title>
            <Modal.Body>
                <div><label className='input'>Title:</label> <input type='text' name='title' onChange={handleChange}/></div>
                <div><label className='input'>Poster:</label> <input type='url' name='posterUrl' onChange={handleChange}/></div>
                <div><label className='input'>Description:</label> <input type='text' name='description' onChange={handleChange}/></div>
                <div><label className='input'>Rating:</label> <input type='text' name='rating' onChange={handleChange}/></div>
                <div><label className='input'>Trailer:</label> <input type='url' name='link' onChange={handleChange}/></div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={()=>{add(mymovie);handleClose()}}>Add</Button>
        </Modal.Footer>
    </Modal>
        </div>
    )
}
export default AddMovie;