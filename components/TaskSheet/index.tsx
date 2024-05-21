"use client";
import React, { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";
import * as C from "./styles";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskSheet: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1716315763941,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 1716315785959,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const addTask = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id: number, text: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text };
        } else {
          return task;
        }
      })
    );
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <TaskForm
        onSubmit={(values, { resetForm }) => {
          addTask(values.task);
          resetForm();
        }}
      />

      <C.List>
        {tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            deleteTask={() => deleteTask(task.id)}
            toggleCompleted={() => toggleCompleted(task.id)}
            editTask={(id: number, text: string) => editTask(id, text)}
          />
        ))}

      </C.List>
    </>
  );
};

export default TaskSheet;
