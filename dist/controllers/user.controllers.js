"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUser = void 0;
const getAllUser = (req, res) => {
    res.send("All user");
};
exports.getAllUser = getAllUser;
const createUser = (req, res) => {
    res.send("User created");
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    res.send("user updated");
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { userId } = req.params;
    res.send(`User with id "${userId} has been deleted`);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controllers.js.map