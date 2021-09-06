const LaboratoryRoutes = require('./LaboratoryRoutes');
const ExamRoutes = require("./ExamRoutes");
const ExamLaboratoryRoutes = require("./ExamLaboratoryRoutes");

module.exports = (app) => {
   LaboratoryRoutes(app),
   ExamRoutes(app),
   ExamLaboratoryRoutes(app)
}
