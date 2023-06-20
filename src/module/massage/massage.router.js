import { Router } from "express";
import * as massageController from './controller/massage.controller.js'
import { auth } from "../../middleware/auth.middleware.js";
const router=Router();

router.get('/',auth,massageController.getMassage);
router.post('/:reciverId',massageController.sendMessages);
router.delete('/:massageId',auth,massageController.deleteMassage)
export default router;