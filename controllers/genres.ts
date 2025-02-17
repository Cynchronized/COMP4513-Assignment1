import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const genreRouter = Router();

// This gets all columns from genres and eras without foreign keys
const defaultQuery = 'genreId, genreName, description, wikiLink, eras!inner (eraName, eraYears)'

genreRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('genres')
    .select(`${defaultQuery}`)
    .order('genreId');

  res.status(200).json(data);
});

genreRouter.get('/:ref', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('genres')
    .select(`${defaultQuery}`)
    .eq('genreId', req.params.ref);

  res.status(200).json(data);
});

genreRouter.get('/painting/:ref', async (req: Request, res: Response) => {
  const paintingId = req.params.ref;
  const { data, error } = await supabase
    .from('genres')
    .select(`genreName, paintinggenres!inner(paintings!inner(title))`)
    .eq('paintinggenres.paintingId', paintingId)
    .order('genreName', { ascending: true });

  res.status(200).json(data);
});

export default genreRouter;
