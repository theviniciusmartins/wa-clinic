const examRepository = require("../repository/ExamRepository");
const examLabRepository = require("../repository/ExamLaboratoryRepository");
const utils = require("../utils/utils");

const createExam = ({ name, exam_type }) => {
    return examRepository.create(name, exam_type);
}

const getExams = () => {
    return examRepository.getAll();
}

const getExam = async ({ id }) => {
    const exam = await examRepository.getOne(id)
    if (utils.isEmpty(exam)) {
        return null;
    }
    return exam;
}

const updateExam = ({ id }, { body }) => {
    return examRepository.update(id, body);
}

const desactivateExam = ({id}) => {
    return examRepository.update(id, { active: false })
}

const associateExam = (examId, laboratoryId) => {
    return examLabRepository.create(laboratoryId, examId);
}

const getAssociation = async ({ id }) => {
    const examLab = await examLabRepository.getOne(id)
    if (utils.isEmpty(examLab)) {
        return null;
    }
    return examLab;
}

module.exports = {
    createExam,
    updateExam,
    getExams,
    getExam,
    desactivateExam,
    associateExam,
    getAssociation
}