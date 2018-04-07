const driverController = require('../controllers/driver-controller');

module.exports = app => {
  app.get('/api', driverController.greeting);
};
