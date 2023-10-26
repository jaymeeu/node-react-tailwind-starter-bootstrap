import express from 'express'
import cors from 'cors'
import { api } from './routes/api.js';

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

  app.use(express.json());

  app.use('/v1', api);

  export default app
