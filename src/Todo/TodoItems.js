import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import './todostyles.css'

const TodoItems = (props) => {
  const [showdiv,setshowdiv]=useState(true)
  const [check,setCheck]=useState(false)

  const deleteItem=()=>{
    setshowdiv(false)        
  }

  const handleCheck=()=>{
    setCheck((prevState)=>{
      return !prevState
    })
  }
    

  return (
    <div> 
      {showdiv?
        <div>
        <Card id="card" style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className="checkbox" type="checkbox" onChange={handleCheck} />
            </Form.Group>
            <Card.Title className={`title ${check?'checked':''}`}>{props.title}</Card.Title>
            
            <Card.Text className={`text ${check?'checked':''}`}>{props.description}</Card.Text>

            <Button id="delBtn" onClick={deleteItem} variant="secondary"><FontAwesomeIcon icon={faTrash} /></Button>
          </Card.Body>
        </Card>
        <br />
        </div>
        :null     
      }
    </div>
    
  );
};




export default TodoItems;
