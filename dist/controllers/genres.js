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
const genreRouter = (0, express_1.Router)();
// This gets all columns from genres and eras without foreign keys
const defaultQuery = 'genreId, genreName, description, wikiLink, eras!inner (eraName, eraYears)';
genreRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('genres')
        .select(`${defaultQuery}`)
        .order('genreId');
    res.status(200).json(data);
}));
genreRouter.get('/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genreId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('genres')
        .select(`${defaultQuery}`)
        .eq('genreId', genreId);
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: genre with ID "${genreId}" not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
genreRouter.get('/painting/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paintingId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('genres')
        .select(`genreName, paintinggenres!inner(paintings!inner(title))`)
        .eq('paintinggenres.paintingId', paintingId)
        .order('genreName', { ascending: true });
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Painting with ID "${paintingId}" not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
exports.default = genreRouter;
