import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const erasRouter = Router();

erasRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("eras")
    .select();

  console.log(data);
  console.log(error);

  res.status(200).json(data);
});


export default erasRouter;
