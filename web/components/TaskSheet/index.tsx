"use client";
import React, { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";
import * as C from "./styles";
import { createTask, fetchTasks, updateTask, deleteTask as removeTask } from "@/lib/api";
import Modal from "../Modal";
import TaskFormEdit from "../TaskFormEdit";

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface TaskValues {
  title: string;
  description?: string;
}

const TaskSheet: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Erro ao carregar tasks:", error);
      }
    };
    loadTasks();
  }, []);



  const openModal = (id: string) => {
    setEditingTaskId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTaskId(null);
    setIsModalOpen(false);
  };

  const addTask = async (title: string, description: string) => {
    try {
      const newTask = await createTask({ title, description });
      if (newTask) {
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    } catch (error) {
      console.error("Erro ao adicionar a task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const success = await removeTask(id);
      if (success) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error("Erro ao excluir a task:", error);
    }
  };


  const toggleCompleted = async (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;
    try {
      const success = await updateTask(id, { completed: !task.completed });
      if (success) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      }
    } catch (error) {
      console.error("Erro ao alternar a conclusão da task:", error);
    }
  };

  const editTaskSubmit = async (values: TaskValues, actions: any) => {
    if (!editingTaskId) return;
    try {
      const success = await updateTask(editingTaskId, values);
      if (success) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editingTaskId ? { ...task, ...values } : task
          )
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar a task:", error);
    } finally {
      actions.setSubmitting(false);
      closeModal();
    }
  };

  return (
    <>
      <TaskForm
        onSubmit={(values, { resetForm }) => {
          addTask(values.title, values.description ?? "");
          resetForm();
        }}
      />
  
      <C.List>
        {tasks.length === 0 ? (
          <p>Crie sua primeira tarefa 📋</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              deleteTask={() => deleteTask(task.id)}
              toggleCompleted={() => toggleCompleted(task.id)}
              editTask={() => openModal(task.id)}
            />
          ))
        )}
      </C.List>
      {editingTaskId && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TaskFormEdit id={editingTaskId} onSubmit={editTaskSubmit} />
        </Modal>
      )}
    </>
  );
}

export default TaskSheet;
