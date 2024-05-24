import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { PrismaService } from './database/prisma.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [TasksController],
  providers: [AppService, TasksService, PrismaService],
})
export class AppModule {}
