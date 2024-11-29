import { Task } from './../entities/task.entity';

export type TaskDTO = {
    titulo: string
    descripcion: string,
    estado: number,
    id: number,
    fecha_create: Date,
    fecha_update: Date
}