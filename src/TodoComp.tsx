import React from 'react';
import { TaskInterface } from './App';
import { InputGroup, InputGroupText, Button } from 'reactstrap';

function TodoComp(props: TaskInterface) {
  return (
    <>
        <InputGroup className='my-2'>
            <InputGroupText>{props.taskName}</InputGroupText>
            <InputGroupText>{props.NoOfHours}</InputGroupText>
            <Button onClick={()=>props.deleteTask(props.ind)}>Delete</Button>
        </InputGroup>
    </>
  )
}

export default TodoComp