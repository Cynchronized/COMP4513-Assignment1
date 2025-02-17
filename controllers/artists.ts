import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const artistRouter = Router();

artistRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('artists')
    .select();

  res.status(200).json(data);
});

artistRouter.get('/:ref', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('artists')
    .select()
    .eq('artistId', req.params.ref);

  res.status(200).json(data);
});

artistRouter.get('/search/:substring', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('artists')
    .select()
    .ilike('lastName', `${req.params.substring}%`);

  res.status(200).json(data);
});

artistRouter.get('/country/:substring', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('artists')
    .select()
    .ilike('nationality', `${req.params.substring}%`);

  res.status(200).json(data);
});

export default artistRouter;
