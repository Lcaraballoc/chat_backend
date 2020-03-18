exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        "error": "",
        "message": message
    });
}

exports.error = function (req, res, message, status, details) {
    console.error(details);
    
    res.status(status || 500).send({
        "error": message,
        "message": ""
    });
}