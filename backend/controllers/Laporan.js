import Laporan from "../models/LaporanModel.js"
import Users from "../models/UsersModel.js";
import { Op } from "sequelize";

export const getLaporan = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Laporan.findAll({
                attributes: ['uuid', 'name', 'price'],
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else if (req.role === "userHQ") {
            response = await Laporan.findAll({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            if (Users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.messages })
    }
}

export const getLaporanById = async (req, res) => {
    try {
        const laporan = await Laporan.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!laporan) res.status(404).json({ msg: "Data Tidak Ditemukan" });
        let response;
        if (req.role === "admin") {
            response = await Laporan.findOne({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    id: laporan.id
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else if (req.role === "userHQ") {
            response = await Laporan.findOne({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    [Op.and]: [{ id: laporan.id }, { userId: req.userId }]
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            if (Users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.messages })
    }
}

export const createLaporan = async (req, res) => {
    const { name, price } = req.body;
    try {
        if (req.role === "admin") {
            await Laporan.create({
                name: name,
                price: price,
                userId: req.userId
            });
        } else if (req.role === "userHQ") {
            await Laporan.create({
                name: name,
                price: price,
                userId: req.userId
            });
        } else {
            if (Users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
        }
        res.status(201).json({ msg: "Laporan Berhasil Dibuat" });
    } catch (error) {
        res.status(500).json({ msg: error.messages })
    }
}

export const updateLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!laporan) res.status(404).json({ msg: "Data Tidak Ditemukan" });
        const { name, price } = req.body;
        if (req.role === "admin") {
            await Laporan.update({ name, price }, {
                where: {
                    id: laporan.id
                }
            })
        } else if (req.role === "userHQ") {
            if (req.userId !== laporan.userId) return res.status(403).json({ msg: "Akses Terlarang" });
            await Laporan.update({ name, price }, {
                where: {
                    [Op.and]: [{ id: laporan.id }, { userId: req.userId }]
                }
            })
        } else {
            if (Users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
        }
        res.status(200).json({ msg: "Produk Berhasil Diperbaharui" });
    } catch (error) {
        res.status(500).json({ msg: error.messages })
    }
}

export const deleteLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!laporan) res.status(404).json({ msg: "Data Tidak Ditemukan" });
        const { name, price } = req.body;
        if (req.role === "admin") {
            await Laporan.destroy({
                where: {
                    id: laporan.id
                }
            })
        } else if (req.role === "userHQ") {
            if (req.userId !== laporan.userId) return res.status(403).json({ msg: "Akses Terlarang" });
            await Laporan.destroy({
                where: {
                    [Op.and]: [{ id: laporan.id }, { userId: req.userId }]
                }
            })
        } else {
            if (Users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
        }
        res.status(200).json({ msg: "Produk Berhasil Dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.messages })
    }
}