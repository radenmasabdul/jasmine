import express from "express"
import { Login, LoginMe, Logout } from "../controllers/Auth.js";

const router = express.Router();

router.get('/loginme', LoginMe);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;