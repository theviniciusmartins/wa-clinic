const express    = require('express');
const config     = require('config');
const swagger    = require('swagger-ui-express');
const swaggerDocument  = require('./swagger-document');

module.exports = () => {
    const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));
    app.use(express.json())
    app.use('/docs', swagger.serve, swagger.setup(swaggerDocument));

    return app;
};