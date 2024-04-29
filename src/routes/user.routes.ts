import { Router } from "express"
import { CreateUser, deleteUser, getAllUser, updateUser } from "../controllers/user.controllers";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const userRouter = Router();

userRouter.get("/", checkJwtMiddlewares, getAllUser)
userRouter.post("/", checkJwtMiddlewares, CreateUser)
userRouter.patch("/:userId", checkJwtMiddlewares, updateUser)
userRouter.delete("/:userId", checkJwtMiddlewares, deleteUser)

export default userRouter;