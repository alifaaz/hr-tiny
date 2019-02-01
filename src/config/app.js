import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import debug from 'debug';
import bodyParser from 'body-parser';
import { runInNewContext } from 'vm';
import chalks from './chalking';
import con from './DB';
import { logs } from './conf';
import error from './errorHandling';
import Errora from './errora';
import  routes  from "../features/index";

const app = express();
const log = debug('app');

// logger to watch the coming request
app.use(morgan('tiny'));

// parse body && params and assign it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// corse origin problems
app.use(cors());


// routers

app.use('/api', routes.individuals)
app.use('/api', routes.trips)
app.use('/api', routes.courses)

app.get('/', (req, res) => res.status(200).send({ msg: " Hi Folks What's Up " }));
app.get('/error', (req, res, next) => {
  const err = new Errora('bad request', { status: 403 });
  return next(err);
 });
log('cooool');

// error handling
app.use(error.handler);

export default app;
