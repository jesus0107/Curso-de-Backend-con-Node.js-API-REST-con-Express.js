const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router')

function routerApi(api, app) {
    app.use(`/${api}/products`, productsRouter);
    app.use(`/${api}/categories`, categoriesRouter);
    app.use(`/${api}/users`, usersRouter);
}

module.exports = routerApi;
