import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // API routes
  server.post('/api/generate-chart', (req: Request, res: Response) => {
    // TODO: Implement birth chart generation
    res.json({ message: "Birth chart generation endpoint" });
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});