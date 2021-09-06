const laboratoryService = require('../services/LaboratoryService');

exports.post = async (req, res, next) => {
   try {
      const laboratory = await laboratoryService.createLaboratory(req.body);
      res.status(201).send(laboratory);
   }
   catch (ex) {
      console.log(ex)
   }
};
  
exports.put = async (req, res, next) => {
   const laboratory = await laboratoryService.getLaboratory(req.params);
      
   if (!laboratory) {
      res.status(404).send("Laboratory not found");
   }

   try {
      const result = await laboratoryService.updateLaboratory(req.params, req);
      res.status(200).send(result)
   }
   catch(ex) {
      console.log(ex);
   }

};

exports.delete = async (req, res, next) => {
   const laboratory = await laboratoryService.getLaboratory(req.params);
      
   if (!laboratory) {
      res.status(404).send("Laboratory not found");
   }

   try {
      await laboratoryService.desactivateLaboratory(req.params);
      res.status(200).send("Laboratory desactivated")
   }
   catch(ex) {
      console.log(ex);
   }

};
  
exports.get = async (req, res, next) => {
   try {
      const laboratories = await laboratoryService.getLaboratories();
      res.status(200).send(laboratories);
   }
   catch(ex) {
      console.log(ex);
   }
};
  
exports.getById = async (req, res, next) => {
   try {
      const laboratory = await laboratoryService.getLaboratory(req.params);

      if (laboratory) {
         return res.status(200).send(laboratory);
      }

      res.status(404).send("Laboratory not found");
   }
   catch(ex) {
      console.log(ex);
   }
};
 