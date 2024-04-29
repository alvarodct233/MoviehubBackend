import { Router } from "express"
import { createGenres, getAllGenres } from "../controllers/genre.controller";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const genreRouter = Router( );

genreRouter.get("/", getAllGenres)
genreRouter.post("/", checkJwtMiddlewares, createGenres)

export default genreRouter