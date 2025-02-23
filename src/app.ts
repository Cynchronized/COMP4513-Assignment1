import express from 'express';
import cors from 'cors';
import erasRouter from '../controllers/eras';
import galleryRouter from '../controllers/galleries';
import artistRouter from '../controllers/artists';
import paintingRouter from '../controllers/paintings';
import genreRouter from '../controllers/genres'
import countRouter from '../controllers/counts'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/eras', erasRouter);
app.use('/api/galleries', galleryRouter);
app.use('/api/artists', artistRouter);
app.use('/api/paintings', paintingRouter);
app.use('/api/genres', genreRouter);
app.use('/api/counts', countRouter);

export default app; 
