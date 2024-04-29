import express from 'express'
import userRouter from './routes/user.routes';
import movieRoutes from './routes/movie.routes';
import genreRouter from './routes/genre.routes';
import { checkJwtMiddlewares } from './db/middlewares/checkjwt.middlewares';
import { requestRouter } from "./routes/requests.routes";


const app = express();

app.use(express.json())
app.use("/user", userRouter )
app.use("/movie", movieRoutes )
app.use("/genre", genreRouter)
app.use("/api", checkJwtMiddlewares, requestRouter)

export default app; 