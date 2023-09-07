import { styled } from "styled-components";
import { BiTrash } from "react-icons/bi";

export default function Tasks () {
  return (
    <Container>
      <Task>
        <Ul>
          <li>lavar</li>
          <li><BiTrash /></li>
        </Ul>
        <Ul>
          <li>lavar</li>
          <li><BiTrash style={{color: '#fa4119', cursor: 'pointer'}}/></li>
        </Ul><Ul>
          <li>lavar</li>
          <li><BiTrash /></li>
        </Ul><Ul>
          <li>lavar</li>
          <li><BiTrash /></li>
        </Ul><Ul>
          <li>lavar</li>
          <li><BiTrash /></li>
        </Ul><Ul>
          <li>lavar</li>
          <li><BiTrash /></li>
        </Ul>
      </Task>
    </Container>
  );
} 

const Ul = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: .1rem solid white;
  padding: 1rem;
  justify-content: space-between;
  &:hover {
    background: gray;
  
    &:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    &:last-child {
      border-radius: 0 0 1rem 1rem;
    }

  }

  &:last-child {
    border-bottom: 0;
  }
`;

const Task = styled.div`
  width: 50%;
`;

const Container = styled.main`
  grid-area: Main;
  display: flex;
  justify-content: center; 
  padding-top: 4rem;
`;

