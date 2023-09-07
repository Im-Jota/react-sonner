import { styled } from "styled-components"
import { Header, Portada } from "./elements/Header"
import Tasks from "./components/Tasks";

function App() {

  return (
    <Container>   
      <Header>
        <Portada></Portada>
      </Header>
      <Form>
        <input
          placeholder="Enter Task"
        />
        <button>Save</button>
      </Form>
      <Tasks />
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
    box-shadow: .1rem .1rem 1rem gray;

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
