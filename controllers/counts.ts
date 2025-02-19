import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const countRouter = Router();

// These API calls must call a view created in Supabase due to lack of aggregated function support in the querybuilder API

countRouter.get('/genres', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('genre_painting_counts')
    .select();

  res.status(200).json(data);
});

countRouter.get('/artists', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('artist_painting_counts')
    .select();

  res.status(200).json(data);
});

countRouter.get('/topgenres/:ref', async (req: Request, res: Response) => {
  const numberOfPaintings = req.params.ref;

  const { data, error } = await supabase
    .from('genre_painting_counts')
    .select()
    .gt('count', numberOfPaintings)
    .order('count', { ascending: false });

  if (data == null || data.length == 0) {
    res.status(400).json(`Error: No genre with at least "${numberOfPaintings}" paintings`);
  } else {
    res.status(200).json(data);
  }
});


export default countRouter;
