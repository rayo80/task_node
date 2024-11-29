import express, { Router } from 'express';
import { get } from 'http';
import { createTaskController, deleteTaskController, detailTaskController, getAllTaskController, updateTaskController } from '../controllers/task.controller';


const router: Router = express.Router();

router.get('/', getAllTaskController)
router.get('/:id', detailTaskController)
router.post('/', createTaskController)
router.put('/:id', updateTaskController)
router.delete('/:id', deleteTaskController)
export default router