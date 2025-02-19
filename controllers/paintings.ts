import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const paintingRouter = Router();

// This query retrieves all columns from paintings, artists, and galleries without foreign keys
const defaultQuery = `
    paintingId, imageFileName, title, museumLink, accessionNumber, copyrightText, description,
    excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
    artists!inner (firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details, artistLink), 
    galleries!inner (galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)
  `;

paintingRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .order('title');

  res.status(200).json(data);
});

paintingRouter.get('/sort/:sortBy', async (req: Request, res: Response) => {
  const { sortBy } = req.params;
  const validSortFields = ['title', 'yearOfWork'];

  if (!validSortFields.includes(sortBy)) {
    res.status(400).json({ error: 'Invalid sort parameter. Use "title" or "yearOfWork".' });
  }

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .order(sortBy);

  res.status(200).json(data);
});

paintingRouter.get('/:ref', async (req: Request, res: Response) => {
  const paintingId = req.params.ref;

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('paintingId', paintingId)
    .order('title');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Painting with ID "${paintingId}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/search/:substring', async (req: Request, res: Response) => {
  const substring = req.params.substring;

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .ilike('title', `${substring}%`)
    .order('title');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Painting with title that starts with "${substring}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/years/:start/:end', async (req: Request, res: Response) => {
  const { start, end } = req.params

  if (end < start) {
    res.status(400).json({ error: 'ending year must be greater than start year' })
  } else {
    const { data, error } = await supabase
      .from('paintings')
      .select(`${defaultQuery}`)
      .gte('yearOfWork', start)
      .lte('yearOfWork', end)
      .order('yearOfWork');

    res.status(200).json(data);
  }
});

paintingRouter.get('/galleries/:ref', async (req: Request, res: Response) => {
  const galleryId = req.params.ref;

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('galleries.galleryId', galleryId)
    .order('title');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Gallery with ID: "${galleryId} was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/artist/:ref', async (req: Request, res: Response) => {
  const artistId = req.params.ref;

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('artists.artistId', artistId)
    .order('title');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Artist with ID: "${artistId}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/artists/country/:substring', async (req: Request, res: Response) => {
  const substring = req.params.substring;

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .ilike('artists.country', `${substring}%`)
    .order('title')

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Artist country that starts with "${substring}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/genre/:ref', async (req: Request, res: Response) => {
  const genreId = req.params.ref;

  const { data, error } = await supabase
    .from('paintings')
    .select('paintingId, title, yearOfWork, paintinggenres!inner(genres!inner(genreName))')
    .eq('paintinggenres.genreId', genreId)
    .order('yearOfWork');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Genre with ID "${genreId}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

paintingRouter.get('/era/:ref', async (req: Request, res: Response) => {
  const eraId = req.params.ref;

  const { data, error } = await supabase
    .from('paintings')
    .select(`paintingId, title, yearOfWork, paintinggenres!inner(genres!inner(eras!inner( eraName,eraYears )))`)
    .eq('paintinggenres.genres.eras.eraId', eraId)
    .order('yearOfWork');

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Era with ID "${eraId}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

export default paintingRouter;
