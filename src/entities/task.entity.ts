import { EntitySchema } from 'typeorm';

export const Task = new EntitySchema({
    name: 'Task',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        titulo: {
            type: 'varchar',
        },
        descripcion: {
            type: 'varchar',
        },
        estado: {
            type: 'int',
        },
        fecha_update: {
            type: 'timestamptz'
        },
        fecha_create: {
            type: 'timestamptz'
        }

    },
});