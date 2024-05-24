import { Injectable } from '@nestjs/common';
import { PrismaClient, Tasks as PrismaTask } from '@prisma/client';
import { Task } from 'src/task.model';

@Injectable()
export class TasksService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createTask(data:Task): Promise<PrismaTask> {
    const { title, description} = data
    try {
      const task = await this.prisma.tasks.create({
        data: {
          id: crypto.randomUUID(),
          title,
          description,
          completed: false,
        },
      });
      return task;
    } catch (error) {
      console.error('Error creating task', error);
      throw error;
    }
  }

  async getAllTasks(): Promise<PrismaTask[]> {
    try {
      return await this.prisma.tasks.findMany();
    } catch (error) {
      console.error('Error getting all tasks', error);
      throw error;
    }
  }

  async getTaskById(id: string): Promise<PrismaTask | null> {
    try {
      return await this.prisma.tasks.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error("Error getting task", error);
      throw error;
    }
  }

  async modifyTaskById(
    id: string,
    title: string,
    description: string,
    completed:boolean
  ): Promise<PrismaTask> {
    try {
      const task = await this.prisma.tasks.update({
        where: { id },
        data: {
          title,
          description,
          completed,
        },
      });
      return task;
    } catch (error) {
      console.error('Error editing task', error);
      throw error;
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await this.prisma.tasks.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error deleting task", error);
      throw error;
    }
  }
}
