const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = require('./swagger.json');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const customerRouter = require('./routes/customerRoute');

app.use('/', customerRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
