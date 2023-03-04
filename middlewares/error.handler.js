function logError(err, req, res, next){
    console.error(err);
    next(err)
}

function errorHandler(err, req, res, next){
    return res.status(500).json({
        messaje: err.message,
        stack: err.stack
    })
}

function boomErrorHandler(err, req, res, next){
    if (err.isBoom){
        const { output } = err;
        return res.status(output.statusCode).json({message: output.payload})
    }
    next(err)
}

module.exports = { boomErrorHandler, logError, errorHandler }
