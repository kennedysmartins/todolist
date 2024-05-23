import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: white;
  background-color: #6363e2;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 2rem;
  width: 110rem;
  max-width: 100%;
`

export const Logo = styled.img`
  width: 8rem;
  object-fit: contain;
  cursor: pointer;
`
export const Avatar = styled.img`
background-color: #e1e1e1;
  border-radius: 50%;
  width: 4rem;
  margin: 0;
  cursor: pointer;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  &:hover {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);

    transition: 0.3s;

  }
`