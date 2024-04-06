import {
    getAds,
    getAdById,
    createAd,
    updateAd,
    deleteAd,
    } from "../services/ads.service.mjs";
import {
    getAdsLocal,
    getAdByIdLocal,
    createAdLocal,
    updateAdLocal,
    deleteAdLocal,
    } from "../services/ads.service.file.mjs";

async function getAdsController(req, res, next) {
    try {
        const ads = await getAds();
        res.json(ads);
    } catch (error) {
        try {
            const ads = await getAdsLocal();
            res.json(ads);
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}

async function getAdByIdController(req, res, next) {
    try {
        const ad = await getAdById(req.params.id);
        if (!ad) {
            res.status(404).json({ error: "Ad not found" });
        } else {
            res.json(ad);
        }
    } catch (error) {
        try {
            const ad = await getAdByIdLocal(req.params.id);
            if (!ad) {
                res.status(404).json({ error: "Ad not found" });
            } else {
                res.json(ad);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}

async function createAdController(req, res, next) {
    try {
        const ad = await createAd(req.body);
        res.status(201).json(ad);
    } catch (error) {
        try {
            const ad = await createAdLocal(req.body);
            res.status(201).json(ad);
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}

async function updateAdController(req, res, next) {
    try {
        const ad = await updateAd(req.params.id, req.body);
        if (!ad) {
            res.status(404).json({ error: "Ad not found" });
        } else {
            res.json(ad);
        }
    } catch (error) {
        try {
            const ad = await updateAdLocal(req.params.id, req.body);
            if (!ad) {
                res.status(404).json({ error: "Ad not found" });
            } else {
                res.json(ad);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}


async function deleteAdController(req, res, next) {
    try {
        await deleteAd(req.params.id);
        res.status(204).end();
    } catch (error) {
        try {
            await deleteAdLocal(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}

export {
    getAdsController,
    getAdByIdController,
    createAdController,
    updateAdController,
    deleteAdController,
    };