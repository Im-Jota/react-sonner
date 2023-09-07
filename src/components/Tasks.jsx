import { styled } from "styled-components";
import { BiTrash } from "react-icons/bi";

export default function Tasks ({rowTasks, handlerchangedone}) {
  return (
    <Container>
      <Task>
        {rowTasks.map((doc) => {
          return (<Ul key={doc.id}>
            <Li $hope={doc.done.toString()}>
              <input
                checked={doc.done}
                value={doc.done}
                type="checkbox"
                onChange={() => handlerchangedone(doc.id)}
              />
              {doc.name}
            </Li>
            <li><BiTrash style={{color: '#fa4119', cursor: 'pointer'}}/></li>
          </Ul>)
        })} 
      </Task>
    </Container>
  );
} 

const Li = styled.li`
    display: flex;
    gap: 1rem;

    text-decoration: ${props => props.$hope === 'true' && 'line-through'};
    color: ${props => props.$hope === 'true' && 'gray'}
`;

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

    li {
      color: white;
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

