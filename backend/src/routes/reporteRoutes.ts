import { Router } from "express";

import {
  crearReporte,
  obtenerReportes
} from "../controllers/reporteController";

const router = Router();

router.post("/", crearReporte);

router.get("/", obtenerReportes);

export default router;  