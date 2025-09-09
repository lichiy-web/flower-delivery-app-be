import express from 'express';
import { pinoHttp } from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';

const PORT = Number(getEnvVar('PORT', '3000'));
export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    if (process.env.npm_lifecycle_event === 'dev') {
      console.dir(`http://localhost:${PORT}`);
    }
  });
};
