import { Router } from "express";
import * as userController from './controller/user.controller.js'
import { auth } from "../../middleware/auth.middleware.js";
import { asyncHandler } from "../../../Services/handlerError.js";
import fileUpload, { HME } from "../../../Services/multer.js";
const router=Router();

router.get('/profile',auth,asyncHandler( userController.profile));
router.patch('/profilePic',auth,fileUpload().single('image'),HME,userController.profilePic)

export default router;