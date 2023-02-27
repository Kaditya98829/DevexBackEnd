const { createUser, userLogIn, updateUser, deleteUser, showUsers } = require("../service");
const { sendResponse, errorResponse } = require("../utils/response");

const register = async(req, res) => {
    try {
    const data = await createUser(req.body);
    sendResponse('Registered', 201, true, data, res)
    } catch (error) {
        errorResponse(400, false, error.message, res);
    }
}

const logIn = async(req, res) => {
    try {
     const data = await userLogIn(req.body.email);
     if(!data)
     {
      return errorResponse(400, false, 'User not found please register', res);
     }
     else if(data.password !== req.body.password) {
     return errorResponse(400, false, 'wrong password', res)
     }
     else {
        sendResponse(`Welcome ${data.name}`, 200, true, data, res);
     }
    } catch (error) {
        errorResponse(400, false, error, res);
    }
}

const update = async(req, res) => {
    try {
        const data = await updateUser(req.params.id, req.body);
        sendResponse('Data updated', 202, true, data, res);
    } catch (error) {
        errorResponse(400, false, error, res);
    }
}

const removeUser = async(req, res) => {
    try {
        const data = await deleteUser(req.params.id);
        sendResponse('user deleted', 200, true, '', res);
    } catch (error) {
        errorResponse(400, false, error, res);
    }
}
const userslist = async(req, res) => {
    try {
        const data = await showUsers();
        sendResponse('users found sucessfully', 200, true, data, res);
    } catch (error) {
        errorResponse(400, false, error, res);
    }
}
module.exports = {register, logIn, update, removeUser, userslist};