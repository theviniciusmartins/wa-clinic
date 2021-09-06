const examService = require('../services/ExamService');
const laboratoryService = require('../services/LaboratoryService');
const laboratoryExamService = require('../services/ExamLaboratoryService');

exports.associateLab = async (req, res, next) => {

   const { exam, laboratory } = req.body;
   const examFound = await examService.getExam({ id: exam });

   if (!examFound) {
      return res.status(404).send("Exam not found");
   }

   if(!examFound.active) {
      return res.status(400).send("Exam is not active");
   }

   const laboratoryFound = await laboratoryService.getLaboratory({id: laboratory});
      
   if (!laboratoryFound) {
      return res.status(404).send("Laboratory not found");
   }

   if (!laboratoryFound.active) {
      return res.status(400).send("Laboratory is not active");
   }

   try {
      const association = await laboratoryExamService.associateExam(exam, laboratory);
      res.status(201).send(association);
   }
   catch(ex) {
      console.log(ex);
   }
};

exports.disassociateLab = async (req, res, next) => {
    const exam = await laboratoryExamService.getAssociation(req.params);
      
    if (!exam) {
       return res.status(404).send("Association not found");
    }
 
    try {
       await laboratoryExamService.remove(req.params);
       res.status(200).send("Association removed")
    }
    catch(ex) {
       console.log(ex);
    }
}
 