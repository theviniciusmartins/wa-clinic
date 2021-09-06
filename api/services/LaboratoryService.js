const laboratoryRepository = require("../repository/LaboratoryRepository");
const utils = require("../utils/utils");

const createLaboratory = ({ name, location }) => {
    return laboratoryRepository.create(name, location);
}

const getLaboratories = () => {
    return laboratoryRepository.getAll();
}

const getLaboratory = async ({ id }) => {
    const laboratory = await laboratoryRepository.getOne(id)
    if (utils.isEmpty(laboratory)) {
        return null;
    }

    return laboratory;
}

const updateLaboratory = ({ id }, { body }) => {
    return laboratoryRepository.update(id, body);
}

const desactivateLaboratory = ({id}) => {
    return laboratoryRepository.update(id, { active: false })
}

module.exports = {
    createLaboratory,
    updateLaboratory,
    getLaboratories,
    getLaboratory,
    desactivateLaboratory
}