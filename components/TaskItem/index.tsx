"use client";
import * as React from "react";
import * as C from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({
  task,
  deleteTask,
  toggleCompleted,
  editTask,
}: {
  task: {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  deleteTask: () => void;
  toggleCompleted: (id: string) => void;
  editTask: (id: string) => void;
}) => {
  const [inputValue, setInputValue] = React.useState(task.title);

  return (
    <C.Container $completed={task.completed}>
      <C.Flex>
        <C.CheckboxContainer>
          <C.HiddenCheckbox onChange={() => toggleCompleted(task.id)} />
          <C.StyledCheckbox
            $completed={task.completed}
            onClick={() => toggleCompleted(task.id)}
          />
        </C.CheckboxContainer>

        <C.Item>
          <C.Title $completed={task.completed}>{task.title}</C.Title>
          {task.description && (
            <C.Description $completed={task.completed}>
              {task.description}
            </C.Description>
          )}
          <C.Date $completed={task.completed}>
            {new Date(task.createdAt).toLocaleString()}
          </C.Date>
        </C.Item>
      </C.Flex>
      <C.Buttons>
        <C.Button onClick={deleteTask}>
          <FaTrash />
        </C.Button>
        <C.Button onClick={() => editTask(task.id)}>
          <FaEdit />
        </C.Button>
      </C.Buttons>
    </C.Container>
  );
};

export default TaskItem;
