import { styled } from "styled-components"
import { Header, Portada } from "./elements/Header"
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import {v4} from 'uuid'
import { Toaster, toast } from "sonner";
import { BiCheck, BiError } from 'react-icons/bi'

function App() {
  const id = v4();
  
  const [task, setTask] = useState('');
  const [rowTasks, setRowsTasks] = useState([]);

  useEffect(() => {
    const row = localStorage.getItem('Task');
    if(row.length > 0){
      setRowsTasks(JSON.parse(row));
    }
  }, [])

  const handlerNewTask = (e) => {
    e.preventDefault();
    const ve = rowTasks.find((f) => f.name === task);
    if(!ve){
      const row = [...rowTasks];
      setRowsTasks([...row, {id: id, name: task, done: false}]);
      toast('Task added successfully', {
        icon: <BiCheck />
      });
    } else {
      toast('Duplicate task', {
        icon: <BiError />
      })
    } 
    
    setTask('');
  }
  
  const handlerchangedone = (id) => {
    const row = rowTasks.map((doc) => doc.id === id ? {...doc, done: !doc.done} : doc);
    setRowsTasks(row);
    toast('Task Done', {
      icon: <BiCheck />
    });
  }

  useEffect(()=>{
    localStorage.setItem('Task', JSON.stringify(rowTasks));
  },[rowTasks])

  return (
    <Container>   
      <Header>
        <Portada></Portada>
      </Header>
      <Form onSubmit={handlerNewTask}>
        <input
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Save</button>
      </Form>
      <Tasks rowTasks={rowTasks} handlerchangedone={handlerchangedone} />
      <Toaster />
    </Container>
  )
}

const Form = styled.form`
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  width: 60%;
  margin: auto;
  display: flex;

  input {
    border-radius: 1rem 0 0 1rem;
    width: calc(100% - 4rem);
    border: none;
    padding: 1rem 2rem;
    box-shadow: .1rem .1rem 1rem black;

    &:focus{
      outline: none;
    }
  }

  button {
    border: none;
    border-radius: 0 1rem 1rem 0;
    padding: 1rem 2rem;
    cursor: pointer;
    background: #17a2b8;
    color: white;
    box-shadow: .1rem .1rem 1rem black;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2.5fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "Header"
    "Main";
  
`;

export default App
