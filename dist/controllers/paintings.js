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
const paintingRouter = (0, express_1.Router)();
// This query retrieves all columns from paintings, artists, and galleries without foreign keys
const defaultQuery = `
    paintingId, imageFileName, title, museumLink, accessionNumber, copyrightText, description,
    excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
    artists!inner (firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details, artistLink), 
    galleries!inner (galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)
  `;
paintingRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .order('title');
    res.status(200).json(data);
}));
paintingRouter.get('/sort/:sortBy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy } = req.params;
    const validSortFields = ['title', 'yearOfWork'];
    if (!validSortFields.includes(sortBy)) {
        res.status(400).json({ error: 'Invalid sort parameter. Use "title" or "yearOfWork".' });
    }
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .order(sortBy);
    res.status(200).json(data);
}));
paintingRouter.get('/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paintingId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .eq('paintingId', paintingId)
        .order('title');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Painting with ID "${paintingId}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/search/:substring', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const substring = req.params.substring;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .ilike('title', `${substring}%`)
        .order('title');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Painting with title that starts with "${substring}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/years/:start/:end', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { start, end } = req.params;
    if (end < start) {
        res.status(400).json({ error: 'ending year must be greater than start year' });
    }
    else {
        const { data, error } = yield supabase_1.supabase
            .from('paintings')
            .select(`${defaultQuery}`)
            .gte('yearOfWork', start)
            .lte('yearOfWork', end)
            .order('yearOfWork');
        res.status(200).json(data);
    }
}));
paintingRouter.get('/galleries/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const galleryId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .eq('galleries.galleryId', galleryId)
        .order('title');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Gallery with ID: "${galleryId} was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/artist/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .eq('artists.artistId', artistId)
        .order('title');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Artist with ID: "${artistId}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/artist/country/:substring', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const substring = req.params.substring;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`${defaultQuery}`)
        .ilike('artists.country', `${substring}%`)
        .order('title');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Artist country that starts with "${substring}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/genre/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genreId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select('paintingId, title, yearOfWork, paintinggenres!inner(genres!inner(genreName))')
        .eq('paintinggenres.genreId', genreId)
        .order('yearOfWork');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Genre with ID "${genreId}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
paintingRouter.get('/era/:ref', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eraId = req.params.ref;
    const { data, error } = yield supabase_1.supabase
        .from('paintings')
        .select(`paintingId, title, yearOfWork, paintinggenres!inner(genres!inner(eras!inner( eraName,eraYears )))`)
        .eq('paintinggenres.genres.eras.eraId', eraId)
        .order('yearOfWork');
    if (data == null || data.length == 0) {
        res.status(400).json(`Error: Era with ID "${eraId}" was not found`);
    }
    else {
        res.status(200).json(data);
    }
}));
exports.default = paintingRouter;
