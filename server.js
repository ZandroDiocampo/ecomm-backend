import express from 'express';
import morgan from 'morgan';
import cartRoutes from './routes/cart.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hello', (req, res) => {
  res.send('world');
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
