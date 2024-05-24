import { IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';
import { Task } from 'src/task.model';

export class CreateTaskBody implements Task {
  @IsString({
    message: 'title must be a string',
  })
  title: string;

  @IsString({
    message: 'description must be a string',
  })
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed: boolean;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
