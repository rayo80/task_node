import { TaskDTO as DTO } from "../dtos/task.dto"
import { TaskRepository as Repository} from "../repositories/task.repository"

export const getAll = async ()  => {
    return await Repository.find()
}

export const getItemById = async (id: number)  => {
    return await Repository.findOneBy({id})
}

export const createTask = async (data: DTO)  => {
    data.estado = 1
    data.fecha_create = new Date();
    data.fecha_update = new Date();
    return await Repository.save(data)
}

export const updateCat = async (id: number, data: DTO)  => {
    data.fecha_update = new Date();
    await Repository.update(id, data)
    return await getItemById(id)
}

export const deleteCat = async (id: number)  => {
    return await Repository.delete(id)
}