const examLabRepository = require("../repository/ExamLaboratoryRepository");
const utils = require("../utils/utils");

const associateExam = async (examId, laboratoryId) => {
    return await examLabRepository.create(laboratoryId, examId);
}

const getAssociation = async ({ id }) => {
    const examLab = await examLabRepository.getOne(id)
    if (utils.isEmpty(examLab)) {
        return null;
    }
    return examLab;
}

const remove = async ({ id }) => {
    return await examLabRepository.remove(id);
}

module.exports = {
    associateExam,
    getAssociation,
    remove
}