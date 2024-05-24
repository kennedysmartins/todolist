// src/tasks/tasks.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Task } from '../task.model';
import { TasksService } from './tasks.service';
import { CreateTaskBody } from 'src/dtos/create-task-body.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
  ) {}

  @Post()
  async createTask(@Body() body: CreateTaskBody): Promise<Task> {
    return this.tasksService.createTask(body);
  }

  @Put(':id')
  async modifyTaskById(
    @Param('id') id: string,
    @Body() body: CreateTaskBody,
  ): Promise<Task> {
    return this.tasksService.modifyTaskById(id, body.title, body.description, body.completed);
  }

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
