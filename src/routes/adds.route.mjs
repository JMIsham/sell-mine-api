import { Router } from "express";
import {
    getAdsController,
    getAdByIdController,
    createAdController,
    updateAdController,
    deleteAdController,
} from "../controllers/ads.controller.mjs";

const router = Router();

router.get("/", getAdsController);
router.get("/:id", getAdByIdController);
router.post("/", createAdController);
router.put("/:id", updateAdController);
router.delete("/:id", deleteAdController);

export default router;
