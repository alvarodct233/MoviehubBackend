import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movie.controllers";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";
// import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const movieRoutes = Router();

movieRoutes.get("/", checkJwtMiddlewares, getAllMovies)
movieRoutes.post("/:userId", checkJwtMiddlewares, createMovie)


export default movieRoutes;