import {Router} from "express";
import {New_user, getAllUser} from "../Controller/Controller_Azure.js";

const router = Router()

router.get('/all_user', getAllUser)
router.post('/new_user', New_user)

export default router;