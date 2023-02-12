import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from './routes/seedRoutes.js';
import userRouter from "./routes/userRoute.js";
dotenv.config();
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
