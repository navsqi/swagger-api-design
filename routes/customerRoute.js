const express = require('express');
const router = express.Router();

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    tags:
 *      - Customers
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/customers', (req, res) => {
  res.status(200).send('Customer results');
});

/**
 * @swagger
 * /customers:
 *    put:
 *      tags:
 *      - Customers
 *      description: Use to return all customers
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 3
 *      responses:
 *        '201':
 *          description: Successfully created user
 */
router.put('/customer', (req, res) => {
  res.status(200).send('Successfully updated customer');
});

module.exports = router;
