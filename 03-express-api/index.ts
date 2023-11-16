import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({
    ok: true,
    message: 'Hello World with TypeScript!',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
