const ExamLaboratoryController = require('../controllers/ExamLaboratoryController');

module.exports = (app) => {
   app.post('/exam-laboratory', ExamLaboratoryController.associateLab);
   app.delete('/exam-laboratory/:id', ExamLaboratoryController.disassociateLab);
}
