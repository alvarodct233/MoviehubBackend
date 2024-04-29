import { Router } from "express";
import {
	protectedRequest,
	publicRequest,
} from "../controllers/requests.controllers";


import { checkJwtMiddlewares } from "../db/middlewares/checkjwt.middlewares";

console.log({ checkJwtMiddlewares }); 

export const requestRouter = Router();

requestRouter.get("/public", publicRequest);


requestRouter.get("/protected",checkJwtMiddlewares, protectedRequest);
