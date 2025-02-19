"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supabase_1 = require("../utils/supabase");
const galleryRouter = (0, express_1.Router)();
galleryRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('galleries')
        .select();
    res.status(200).json(data);
}));
galleryRouter.get('/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const galleryId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('galleries')
        .select()
        .eq('galleryId', galleryId);
    if (data === null || data.length == 0) {
        res.status(400).json(`Error: Gallery with ID "${galleryId}" was not found.`);
    }
    else {
        res.status(200).json(data);
    }
}));
galleryRouter.get('/country/:substring', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const substring = req.params.substring;
    const { data, error } = yield supabase_1.supabase
        .from('galleries')
        .select()
        .ilike('galleryCountry', `${substring}%`);
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Gallery that starts with "${substring}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
exports.default = galleryRouter;
