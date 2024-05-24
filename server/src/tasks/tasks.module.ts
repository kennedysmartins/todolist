import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { PrismaService } from "src/database/prisma.service";

@Module({
    imports: [PrismaClient],
    controllers: [TasksController],
    providers: [TasksService, PrismaService],
})

export class TasksModule {}