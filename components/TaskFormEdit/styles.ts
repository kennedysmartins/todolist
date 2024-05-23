import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const Main = styled.div`
  display: flex;
  gap: 1.4rem;
  width: 100%;
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

`;


export const Button = styled.button`
  background-color: #6363e2;
  border-radius: 0.6rem;
  border: none;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  font-size: 1.8rem;
`;

export const StyledField = styled(Field)`
  padding: 0.8rem;
  border-radius: 0.6rem;
  border: none;
  background-color: #ecedf6;
  font-size: 1.8rem;
  width: 100%;


  &::placeholder {
    color: #999;
  }
`;


export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;
`;
