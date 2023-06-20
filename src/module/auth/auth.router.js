import { Router } from "express";
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from "../../../Services/handlerError.js";
import validation from "../../middleware/validation.js";
import * as validators from './auth.validation.js'
const router=Router();

router.post('/signup',validation(validators.signUpSchema),asyncHandler(authController.signUp));
router.post('/signin',validation(validators.signInSchema),asyncHandler( authController.signIn));
router.get('/confirmEmail/:token',authController.confirmEmail)//حولتها ل get بدل patch  لانه بدي اتعامل مع اللوكلهوست

export default router;