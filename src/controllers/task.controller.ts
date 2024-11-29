import { TaskDTO as DTO} from "../dtos/task.dto"
import { createTask, deleteCat, getAll, getItemById, updateCat } from "../services/task.services"
import { Response, Request } from "express"


export const getAllTaskController = async (req: Request, res: Response) => {
    try {
        return res.json(await getAll());
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const createTaskController = async (req: Request, res: Response) => {
    return res.status(201).json( await createTask(req.body as DTO))
}

export const detailTaskController = async (req: Request, res: Response) => {
    const cat = await getItemById(parseInt(req.params.id))
    if (!cat){
        return res.status(404).json({"message": "Object not found"})
    }
    return res.status(200).json(cat)
}

export const updateTaskController = async (req: Request, res: Response) => {
    const cat = await updateCat(parseInt(req.params.id), req.body as DTO)
    if (!cat){
        return res.status(404).json({"message": "Object not found"})
    }
    return res.status(200).json(cat)
}

export const deleteTaskController = async (req: Request, res: Response) => {
    await deleteCat(parseInt(req.params.id))

    return res.status(204).json({"message": "Object deleted"})
}
