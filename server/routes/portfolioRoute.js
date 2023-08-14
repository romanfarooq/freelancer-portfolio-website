import authMiddleware from "../middleware/auth.js";
import { Router } from "express";
import {
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";

const router = Router();

router.get("/", getAllPortfolios);
router.get("/:id", getPortfolioById);

router.use(authMiddleware); // Protect routes below this line

router.post("/", createPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

export default router;
