import { Router } from 'express';
import { usersRouter } from './users/users.route.js';


export const api = Router()

api.use('/users', usersRouter)