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
    res.status(400).json({ error: 'Invalid sort parameter. Use "title" or "year".' });
  }

  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .order(sortBy);

  res.status(200).json(data);
});

paintingRouter.get('/:ref', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('paintingId', req.params.ref)
    .order('title');

  res.status(200).json(data);
});

paintingRouter.get('/search/:substring', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .ilike('title', `${req.params.substring}%`)
    .order('title');

  res.status(200).json(data);
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
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('galleries.galleryId', req.params.ref)
    .order('title');

  res.status(200).json(data);
});

paintingRouter.get('/artist/:ref', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .eq('artists.artistId', req.params.ref)
    .order('title');

  res.status(200).json(data);
});

paintingRouter.get('/artists/country/:substring', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .ilike('artists.country', `${req.params.substring}%`)
    .order('title')

  res.status(200).json(data);
});

export default paintingRouter;
