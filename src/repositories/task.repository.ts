import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entity";

export  const TaskRepository = AppDataSource.getRepository(Task)