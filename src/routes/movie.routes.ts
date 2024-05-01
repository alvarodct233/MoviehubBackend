import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movie.controllers";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const movieRoutes = Router();

movieRoutes.get("/", getAllMovies)
movieRoutes.post("/:userId", createMovie)


export default movieRoutes;  