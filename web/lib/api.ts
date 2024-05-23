"use server"
import axios from "axios";

const apiUrl = process.env.BACKEND_URL!;

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const createTask = async (data: { title: string; description: string }): Promise<Task | null> => {
  try {
    const response = await axios.post(`${apiUrl}/tasks`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar a task", error.message);
    return null;
  }
};

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter tasks:", error.message);
    throw error;
  }
};

export const fetchTaskByID = async (id: string): Promise<Task | null> => {
  try {
    const response = await axios.get(`${apiUrl}/tasks/${id}`);

    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar a task", error.message);
    return null;
  }
};

export const deleteTask = async (id: string): Promise<boolean> => {
  try {
    const response = await axios.delete(`${apiUrl}/tasks/${id}`);

    return response.status === 200 || response.status === 204;
  } catch (error: any) {
    console.error("Erro ao excluir a task:", error.message);
    return false;
  }
};

export const updateTask = async (id: string, data: object): Promise<boolean> => {
  try {
    const response = await axios.put(`${apiUrl}/tasks/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.status === 200;
  } catch (error: any) {
    console.error("Erro ao atualizar a task", error.message);
    return false;
  }
};
