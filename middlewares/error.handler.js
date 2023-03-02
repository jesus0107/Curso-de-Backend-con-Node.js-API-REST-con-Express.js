function logError(err, req, res, next){
    console.error(err);
    next(err)
}

function errorHandler(err, req, res, next){
    res.status(500).json({
        messaje: err.message,
        stack: err.stack
    })
}

module.exports = { logError, errorHandler }
