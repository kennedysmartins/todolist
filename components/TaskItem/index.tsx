"use client";
import * as React from "react";
import * as C from "./styles";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

const TaskItem = ({
  task,
  deleteTask,
  toggleCompleted,
  editTask,
}: {
  task: { text: string; id: number; completed: boolean };
  deleteTask: () => void;
  toggleCompleted: (id: number) => void;
  editTask: (id: number, text: string) => void;
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(task.text);

  return (
    <C.Container>
      <C.Flex>
        <C.CheckboxContainer>
          <C.HiddenCheckbox
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
          <C.StyledCheckbox
            checked={task.completed}
            onClick={() => toggleCompleted(task.id)}
          />
        </C.CheckboxContainer>
        {editMode ? (
          <C.Input
            placeholder={`Edite: ${task.text}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <C.Item>
            <C.Title completed={task.completed}>{task.text}</C.Title>
            <C.Date>{new Date(task.id).toLocaleString()}</C.Date>
          </C.Item>
        )}
      </C.Flex>
      <C.Buttons>
        {editMode ? (
          <C.Button
            onClick={() => {
              editTask(task.id, inputValue);
              setEditMode(false);
            }}
          >
            <FaSave />
          </C.Button>
        ) : (
          <>
            <C.Button onClick={deleteTask}>
              <FaTrash />
            </C.Button>
            <C.Button onClick={() => setEditMode(true)}>
              <FaEdit />
            </C.Button>
          </>
        )}
      </C.Buttons>
    </C.Container>
  );
};

export default TaskItem;
