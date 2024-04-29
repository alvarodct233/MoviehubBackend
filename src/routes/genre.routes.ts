import { Router } from "express"
import { createGenres, getAllGenres } from "../controllers/genre.controller";

const genreRouter = Router( );

genreRouter.get("/", getAllGenres)
genreRouter.post("/", createGenres)

export default genreRouter