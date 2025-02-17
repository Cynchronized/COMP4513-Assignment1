import { Router, Request, Response } from 'express';
import { supabase } from '../utils/supabase';

const paintingRouter = Router();

// This query retrieves all columns from paintings, artists, and galleries without foreign keys
const defaultQuery = `
    paintingId, imageFileName, title, museumLink, accessionNumber, copyrightText, description,
    excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
    artists (firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details, artistLink), 
    galleries (galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)
  `;

paintingRouter.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('paintings')
    .select(`${defaultQuery}`)
    .order('title');

  res.status(200).json(data);
});

// TODO: Rest of API calls


export default paintingRouter;
