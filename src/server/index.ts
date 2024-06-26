import express from 'express';
import type { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // API routes
  server.post('/api/generate-chart', async (req: Request, res: Response) => {
    try {
      const { date, time, place } = req.body;
      
      // TODO: Implement actual birth chart calculation here
      
      // For now, we'll use OpenAI to generate a mock response
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an expert astrologer. Provide a brief astrological reading based on the given birth information."
          },
          {
            role: "user",
            content: `Generate a brief astrological reading for a person born on ${date} at ${time} in ${place}. Include sun sign, moon sign, and rising sign.`
          }
        ],
        max_tokens: 200
      });

      res.json({ 
        message: "Birth chart generated", 
        reading: completion.choices[0].message.content?.trim() 
      });
    } catch (error) {
      console.error('Error generating birth chart:', error);
      res.status(500).json({ message: "Error generating birth chart" });
    }
  });

  // Handle webpack-hmr
  server.get('/_next/webpack-hmr', (req, res) => {
    handle(req, res);
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});