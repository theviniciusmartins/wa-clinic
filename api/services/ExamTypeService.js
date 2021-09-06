const examTypeRepository = require("../repository/ExamTypeRepository");
const utils = require("../utils/utils");

const getExamTypes = () => {
    return examTypeRepository.getAll();
}

const getExamType = async ({ id }) => {
    const examType = await examTypeRepository.getOne(id)
    if (utils.isEmpty(examType)) {
        return null;
    }

    return examType;
}


module.exports = {
    getExamType,
    getExamTypes
}