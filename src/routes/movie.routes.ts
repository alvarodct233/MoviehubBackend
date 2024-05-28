// import { Router } from "express";
// import { createMovie, getAllMovies } from "../controllers/movie.controllers";
// import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

// const movieRoutes = Router();

// movieRoutes.get("/", getAllMovies)
// movieRoutes.post("/:userId", createMovie)


// export default movieRoutes;  

import { Router } from "express";
import { createMovie, getAllMovies, deleteMovie, updateMovie } from "./../controllers/movie.controllers";

const router = Router();

router.post("/:userId", createMovie);
router.get("/", getAllMovies);
router.delete("/:movieId", deleteMovie);
router.patch("/:movieId", updateMovie);

export default router;
