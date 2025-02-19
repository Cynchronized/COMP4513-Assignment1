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
const artistRouter = (0, express_1.Router)();
artistRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('artists')
        .select();
    res.status(200).json(data);
}));
artistRouter.get('/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('artists')
        .select()
        .eq('artistId', artistId);
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Artist with ID "${artistId}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
artistRouter.get('/search/:substring', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const substring = req.params.substring;
    const { data, error } = yield supabase_1.supabase
        .from('artists')
        .select()
        .ilike('lastName', `${substring}%`);
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Artist last name that starts with "${substring}" not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
artistRouter.get('/country/:substring', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const substring = req.params.substring;
    const { data, error } = yield supabase_1.supabase
        .from('artists')
        .select()
        .ilike('nationality', `${substring}%`);
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Artist with nationality that begins with "${substring}" not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
exports.default = artistRouter;
