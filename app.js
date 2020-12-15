const express = require('express');
const app = express();

// serve auto-generated swagger-ui generated API docs from express
const swaggerUi = require('swagger-ui-express');

// YAML parser
const YAML = require('yamljs');

// To parse .yaml file into json format
const swaggerDocument = YAML.load('./swagger.yaml');
const port = process.env.PORT || 5000;

// Full documentation: https://github.com/scottie1984/swagger-ui-express
app.use('/', swaggerUi.serve, swaggerUi.setup(JSON.parse(JSON.stringify(swaggerDocument))));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
