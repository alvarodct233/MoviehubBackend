import express from 'express'
import userRouter from './routes/user.routes';
import movieRoutes from './routes/movie.routes';
import genreRouter from './routes/genre.routes';
import { checkJwtMiddlewares } from './middlewares/checkjwt.middlewares';
import { requestRouter } from "./routes/requests.routes";
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json())
app.use("/user", userRouter )
app.use("/movie", movieRoutes )
app.use("/genre", genreRouter)
app.use("/api", checkJwtMiddlewares, requestRouter)

export default app;   