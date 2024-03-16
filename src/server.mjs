import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
import adsRouter from './routes/adds.route.mjs';

app.use(bodyParser.json());
app.use('/ads', adsRouter);
app.use(
  bodyParser.urlencoded({
    extended: true,
  }
));
app.get('/', (req, res) => {
  res.json('ok');
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});