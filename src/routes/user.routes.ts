import { Router } from "express"
import { CreateUser, deleteUser, getAllUser, updateUser } from "../controllers/user.controllers";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const userRouter = Router();

userRouter.get("/", getAllUser)
userRouter.post("/", CreateUser)
userRouter.patch("/:userId", updateUser)
userRouter.delete("/:userId", deleteUser)

export default userRouter;