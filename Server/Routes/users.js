import express from "express";
import { addAccounts, getAccounts } from "../Controllers/user.js";

export const router = express.Router();
export const loginRouter = express.Router();
export const registerRouter = express.Router();

loginRouter.post("/", getAccounts);

registerRouter.post("/", addAccounts);