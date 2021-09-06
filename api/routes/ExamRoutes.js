const examController = require('../controllers/ExamController');

module.exports = (app) => {
   app.post('/exam', examController.post);
   app.put('/exam/:id', examController.put);
   app.delete('/exam/:id', examController.delete);
   app.get('/exams', examController.get);
   app.get('/exam/:id', examController.getById);
}
