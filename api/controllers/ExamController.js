const examService = require('../services/ExamService');
const examTypeService = require('../services/ExamTypeService');
const laboratoryService = require('../services/LaboratoryService');

exports.post = async (req, res, next) => {
   try {
      const { exam_type } = req.body;

      if (!exam_type) {
         return res.status(400).send("exam_type is required");
      }

      const examType = await examTypeService.getExamType({ id: exam_type })
      if (!examType) {
         return res.status(400).send("exam_type is not valid");
      }

      const exam = await examService.createExam(req.body);
      res.status(201).send(exam);
   }
   catch (ex) {
      console.log(ex)
   }
};
  
exports.put = async (req, res, next) => {
   const exam = await examService.getExam(req.params);
      
   if (!exam) {
      return res.status(404).send("Exam not found");
   }

   try {
      const { exam_type } = req.body;

      if (!exam_type) {
         return res.status(400).send("exam_type is required");
      }

      const examType = await examTypeService.getExamType({ id: exam_type })
      if (!examType) {
         return res.status(400).send("exam_type is not valid");
      }

      const exam = await examService.updateExam(req.params, req);
      res.status(201).send(exam);
   }
   catch(ex) {
      console.log(ex);
   }

};

exports.delete = async (req, res, next) => {
   const exam = await examService.getExam(req.params);
      
   if (!exam) {
      return res.status(404).send("Exam not found");
   }

   try {
      await examService.desactivateExam(req.params);
      res.status(200).send("Laboratory desactivated")
   }
   catch(ex) {
      console.log(ex);
   }
};
  
exports.get = async (req, res, next) => {
   try {
      const exams = await examService.getExams();
      res.status(200).send(exams);
   }
   catch(ex) {
      console.log(ex);
   }
};
  
exports.getById = async (req, res, next) => {
   try {
      const exam = await examService.getExam(req.params);

      if (exam) {
         return res.status(200).send(exam);
      }

      res.status(404).send("Exam not found");
   }
   catch(ex) {
      console.log(ex);
   }
};

  
exports.associateLab = async (req, res, next) => {
   const { exam, laboratory } = req.body;

   const examFound = await examService.getExam({ id: exam });
   console.log(exam);
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
      const association = await examService.associateExam(exam, laboratory);
      res.status(201).send(association);
   }
   catch(ex) {
      console.log(ex);
   }
};

 