const { userModel } = require("../model")

const createUser = (payload) => new Promise((resolve, reject) => {
    userModel.create(payload)
    .then(resolve)
    .catch(reject)
});

const userLogIn = (payload) => new Promise((resolve, reject) => {
    userModel.findOne({email: payload})
    .then(resolve)
    .catch(reject)
})

const updateUser = (id, payload) => new Promise((resolve, reject) => {
    userModel.findByIdAndUpdate(id, payload, {new: true, runValidators: true})
    .then(resolve)
    .catch(reject)
});

const deleteUser = (userId) => new Promise((resolve, reject) => {
    userModel.findByIdAndDelete({_id:userId})
    .then(resolve)
    .catch(reject)
});

const showUsers = () => new Promise((resolve, reject) => {
    userModel.find()
    .then(resolve)
    .catch(reject)
});

module.exports = {createUser, userLogIn, deleteUser, updateUser, showUsers};