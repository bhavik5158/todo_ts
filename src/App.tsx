import React, { ChangeEvent } from 'react';
import './App.css';
import { Container, Col, Button } from 'reactstrap';
import TodoComp from './TodoComp';

export interface TaskInterface{
    taskName: string,
    NoOfHours: number,
    deleteTask?: any,
    ind?: number
} 

function App() {

    const[taskInp, setTaskInp] = React.useState<string>('')
    const[hourInp, setHourInp] = React.useState<number>(0)
    const[todoList, setTodoList] = React.useState<TaskInterface[]>([])

    const handleInputs = (event: ChangeEvent<HTMLInputElement>) => {
        switch(event.target.name){
            case 'taskInp':
                setTaskInp(event.target.value);
                break;
            case 'hourInp':
                setHourInp(Number(event.target.value))   
                break; 
        }
    }

    const add = () => {
        let task_obj = { taskName: taskInp, NoOfHours: hourInp }
        setTodoList([...todoList, task_obj])
        setHourInp(0)
        setTaskInp('')
    }

    const deleteTask = (ind:number) => {
        setTodoList(todoList.filter((ele, i:number) => {return i != ind? ele : null}))
    }

    const resetTodo = () => {
        setTodoList([])
    }
  return (
    <>
        <div className='container-fluid'>
            <Col className='header'>
                <div className=''>
                    <input type="text" name="taskInp" value={taskInp} onChange={handleInputs} placeholder='Enter Task here...'/> <br/>
                    <input type="number" name="hourInp" value={hourInp} onChange={handleInputs} placeholder='Enter No of hours' />
                    <input type="text" name="" id="" />
                </div>
                <div className=''>
                    <Button className='m-1' onClick={add}>Add Task</Button>
                    <Button color='danger' className='m-1' onClick={resetTodo}>Reset</Button>
                </div>
            </Col>
            <Col>
                {todoList.map((task, ind)=>(
                    <div key={ind}>
                        <TodoComp taskName={task.taskName} NoOfHours={task.NoOfHours} deleteTask={deleteTask} ind={ind} />
                    </div>
                ))}
            </Col>
        </div>
    </>
  );
}

export default App;
