
const sendResponse = (message, statusCode, success, data, response) => new Promise((resolve, reject) => {
    response.status(statusCode).json({
        message: message,
        success: success,
        data
    })
})

const errorResponse = (statusCode, success, message, response)=> {
    response.status(statusCode).json({
        message: message,
        success: success
    })
}
module.exports = {sendResponse, errorResponse};

