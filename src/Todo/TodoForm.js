import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import TodoList from "./TodoList";
import './todostyles.css'

const TodoForm = () => {
    const [formIndex,setIndex]=useState({index:0})
    const [formData, setformData] = useState({description:''})
    const [formTitle, setformTitle] = useState({title:''})
    const [todoList,settodoList]=useState([])


    const handleChange = (evt) => {
        evt.preventDefault()
        const {name,value}=evt.target
        setformData((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })

        setformTitle((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })

        // console.log(formTitle)
        // console.log(formData)



    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const { name, value } = evt.target
        
        setformData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    
        setformTitle((prevState) => {
            return {
                ...prevState,
                formTitle: evt.target.value,
            }
        })
        setIndex((prevIndex)=>{
            
            return {
            ...prevIndex,
            index:prevIndex.index++
            }
            
        })
        
    
        
        settodoList((prevState)=>{
            return[
                ...prevState,
                {
                    "title":formTitle.title,
                    "description":formData.description,
                    "index":formIndex.index
                }
            ]
        })
        console.log(formTitle.title)
        console.log(formData.description)
        console.log(formIndex.index)


    }
    
    return (
        <div>
            <Form className="todo-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task</Form.Label> <br/>
                    <Form.Control type="text" name="title" value={formTitle.title} placeholder="Enter Task Title" onChange={handleChange} />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Description</Form.Label> 
                    <br/>
                    <Form.Control type="text" name="description" value={formData.description} style={{ height: '100px' }} placeholder="Enter Task Title" onChange={handleChange} />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
            <TodoList todos={todoList}/>
        </div>
    
    );
    


}

export default TodoForm;
