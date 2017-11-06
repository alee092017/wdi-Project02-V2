const express = require('express');

const jobappsController = require('../controllers/jobapps-controller');

const jobappsRouter = express.Router();

jobappsRouter.get('/', jobappsController.index);

module.exports = jobappsRouter;
