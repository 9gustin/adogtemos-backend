import express from 'express';
import cors from 'cors';
import { PET_DATA } from './data';

const app = express();

app.listen(process.env.PORT || 3000);

app.use(cors());

const router = express.Router();

router.get('/pets', (req, res) => {
  res.send(PET_DATA);
});

app.use('/', router);
