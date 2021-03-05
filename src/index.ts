import express from 'express';
import cors from 'cors';

const app = express();

app.listen(process.env.PORT || 3000);

app.use(cors());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('buenardo');
});

app.use('/', router);
