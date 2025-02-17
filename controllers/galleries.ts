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
  const { data, error } = await supabase
    .from('galleries')
    .select()
    .eq('galleryId', req.params.ref)

  res.status(200).json(data);
});

galleryRouter.get('/country/:substring', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('galleries')
    .select()
    .ilike('galleryCountry', `${req.params.substring}%`);

  res.status(200).json(data);
});

export default galleryRouter
