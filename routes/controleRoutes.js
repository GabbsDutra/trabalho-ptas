import express from "express";
import * as controleController from "../controllers/controleController.js"; 

const router = express.Router();

router.post("/", controleController.criarControle);
router.get("/", controleController.listarControles);
router.get("/:id", controleController.buscarControlePorId);
router.put("/:id", controleController.atualizarControle);
router.delete("/:id", controleController.excluirControle);

export default router;
