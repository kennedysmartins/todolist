import styled from "styled-components";


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ecedf6;
  box-shadow: 0 0 .5rem #ccc;
  border-radius: .5rem;
  max-width: 110rem;
  margin: 2rem auto;
  gap: 1.5rem;

  &:not(:empty) {
    padding: 2rem;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 2rem;
  text-decoration: none;
  list-style: none;
`;



export const Flex = styled.div`
  display:flex;
  width: 100%;
`
