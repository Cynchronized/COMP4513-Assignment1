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
const countRouter = (0, express_1.Router)();
// These API calls must call a view created in Supabase due to lack of aggregated function support in the querybuilder API
countRouter.get('/genres', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('genre_painting_counts')
        .select();
    res.status(200).json(data);
}));
countRouter.get('/artists', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('artist_painting_counts')
        .select();
    res.status(200).json(data);
}));
countRouter.get('/topgenres/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const numberOfPaintings = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('genre_painting_counts')
        .select()
        .gt('count', numberOfPaintings)
        .order('count', { ascending: false });
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: No genre with at least "${numberOfPaintings}" paintings`);
    }
    else {
        res.status(200).json(data);
    }
}));
exports.default = countRouter;
