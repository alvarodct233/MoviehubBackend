"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controllers_1.getAllUser);
userRouter.post("/", user_controllers_1.createUser);
userRouter.patch("/", user_controllers_1.updateUser);
userRouter.delete("/:userId", user_controllers_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map