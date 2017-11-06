const express = require('express');
const jobappsRouter = express.Router();

const jobappsController = require('../contollers/jobapps-controller';)

jobappsRouter.get('/', jobappsController.index);

module.exports = jobappsRouter;
