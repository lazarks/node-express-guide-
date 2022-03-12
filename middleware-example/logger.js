const logger = (req, res, next) => {
    let method = req.method;
    let url = req.url;
    let time = new Date().getFullYear();
    console.log(`[method: ${method}]    [url: ${url}]   [year:${time}]`);
    next();
};

module.exports = logger;
