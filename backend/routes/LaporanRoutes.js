import express from "express"
import { getLaporan, getLaporanById, createLaporan, updateLaporan, deleteLaporan } from "../controllers/Laporan.js";

const router = express.Router();

router.get('/laporan', getLaporan);
router.get('/laporan/:id', getLaporanById);
router.post('/laporan', createLaporan);
router.patch('/laporan/:id', updateLaporan);
router.delete('/laporan/:id', deleteLaporan);

export default router;