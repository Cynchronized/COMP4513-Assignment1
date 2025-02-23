import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const galleryRouter = Router();

galleryRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('galleries')
    .select();

  res.status(200).json(data);
});

galleryRouter.get('/:ref', async (req: Request, res: Response) => {
  const galleryId = req.params.ref;

  const { data, error } = await supabase
    .from('galleries')
    .select()
    .eq('galleryId', galleryId);

  if (data === null || data.length == 0) {
    res.status(400).json(`Error: Gallery with ID "${galleryId}" was not found.`);
  } else {
    res.status(200).json(data);
  }
});

galleryRouter.get('/country/:substring', async (req: Request, res: Response) => {
  const substring = req.params.substring;

  const { data, error } = await supabase
    .from('galleries')
    .select()
    .ilike('galleryCountry', `${substring}%`);

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: Gallery that starts with "${substring}" was not found`);
  } else {
    res.status(200).json(data);
  }
});

export default galleryRouter
