import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createUserValidator = [
  check("full_name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("email").isEmail(),
  check("password").exists().notEmpty(),
  check("url_image").optional().notEmpty(),
  check("role_Id").exists().notEmpty(),

  (req, res, next) => validateResults(req, res, next)
];

export const updateUserValidator = [
  check("full_name").optional().notEmpty().isLength({ min: 5, max: 50 }),
  check("email").optional().isEmail(),
  check("password").optional().notEmpty(),
  check("url_image").optional().notEmpty(),
  check("role_Id").optional().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];

export const loginValidator = [
  check("email").isEmail(),
  check("password").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];