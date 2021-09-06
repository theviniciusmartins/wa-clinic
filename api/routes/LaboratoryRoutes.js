const LaboratoryController = require('../controllers/LaboratoryController');

module.exports = (app) => {
   app.post('/laboratory', LaboratoryController.post);
   app.put('/laboratory/:id', LaboratoryController.put);
   app.delete('/laboratory/:id', LaboratoryController.delete);
   app.get('/laboratories', LaboratoryController.get);
   app.get('/laboratory/:id', LaboratoryController.getById);
}
