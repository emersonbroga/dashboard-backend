import express from 'express';
import dashboardRouter from 'controllers/DashboardController';
import { response } from 'middlewares/response';

const app = express();
const port = 3001;

app.use(response);

app.use('/dashboard', dashboardRouter);

app.get('/', (req, res) => {
  return res.send('API');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
