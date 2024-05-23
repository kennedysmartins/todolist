import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateTaskBody {
  @IsString({
    message: 'title must be a string',
  })
  title: string;

  @IsString({
    message: 'description must be a string',
  })
  @IsOptional()
  description?: string;

  @IsBoolean()
  completed: boolean;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
