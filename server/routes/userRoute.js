import { Router } from "express";
import {
  register,
  login,
  logout,
  getMe,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getMe);
router.get("/user/:id", getUser);
router.get("/users", getUsers);

export default router;
