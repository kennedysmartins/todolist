import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 2.8rem;
  height: 2.8rem;
  background: ${(props) => (props.checked ? "#1890ff" : "#eeeeee")};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:after {
    content: ${(props) => (props.checked ? '"✔"' : '""')};
    color: #fff;
    font-size: 1.5rem;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  list-style: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const Button = styled.button`
  background-color: #eeeeee;
  border-radius: 0.6rem;
  border: none;
  padding: 1rem 1rem;
  margin: 1rem 0;
  color: #5f5e72;
  text-align: center;
`;

export const Title = styled.h3<{ completed: boolean }>`
  font-size: 1.8rem;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const Date = styled.h5`
  font-size: 1rem;
`;
export const Input = styled.input`
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
