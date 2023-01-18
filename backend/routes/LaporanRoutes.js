import express from "express"
import { getLaporan, getLaporanById, createLaporan, updateLaporan, deleteLaporan } from "../controllers/Laporan.js";
import { verifyUser } from "../middleware/AuthUser.js"

const router = express.Router();

router.get('/laporan', verifyUser, getLaporan);
router.get('/laporan/:id', verifyUser, getLaporanById);
router.post('/laporan', verifyUser, createLaporan);
router.patch('/laporan/:id', verifyUser, updateLaporan);
router.delete('/laporan/:id', verifyUser, deleteLaporan);

export default router;