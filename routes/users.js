import { Router } from "express";
import { createUser, getUsers, getUserById,  updateUser, deleteUser, login } from "../controllers/users.js";
import { createUserValidator, updateUserValidator, loginValidator } from "../validators/users.js";

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/auth/login',loginValidator, login)

router.post('/', createUserValidator, createUser);

router.put('/:id', updateUserValidator, updateUser);

router.delete('/:id', deleteUser);

export { router };