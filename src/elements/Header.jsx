import { styled } from "styled-components";

export const Portada = styled.div`
  min-width: 100%;
  height: 100%;
  /*background-image: url(https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);*/
  background-image: url(https://images.pexels.com/photos/6408402/pexels-photo-6408402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #202020;
    border-radius: 1rem;
    opacity: 0.1;
    
    @media(max-width: 40rem) {
      border-radius: 0;
    }
  }

  @media(max-width: 40rem){
    border-radius: 0;
  }
`;

export const Header = styled.header`
  grid-area: Header;
  padding: 1rem 10rem 0 10rem;
  @media(max-width: 60rem){
    padding: 1rem 5rem 0 5rem;
  }
  @media(max-width: 40rem){
    padding: 0;
  }
`;