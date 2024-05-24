import { useState, useEffect } from "react";
import { createTask, fetchTasks, fetchTaskByID, updateTask, deleteTask as removeTask } from "@/lib/api";
import { Task, TaskValues } from "@/types";

export const useTasks = () => {
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
      const success = await updateTask(id, {
        ...task,
        completed: !task.completed,
      });
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

  const fetchTask = async (id: string) => {
    try {
      return await fetchTaskByID(id);
    } catch (error) {
      console.error("Erro ao buscar a task:", error);
      return null;
    }
  };

  return {
    tasks,
    isModalOpen,
    editingTaskId,
    openModal,
    closeModal,
    addTask,
    deleteTask,
    toggleCompleted,
    editTaskSubmit,
    fetchTask,
  };
};
