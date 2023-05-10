import express from 'express';
import { loginRouter, registerRouter } from './Routes/users.js'
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);

app.use("/register", registerRouter);

 
app.listen(PORT, console.log(`Server conectado na porta: ${PORT}`));