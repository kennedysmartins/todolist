// src/task.model.ts

export interface Task {
    id?: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

