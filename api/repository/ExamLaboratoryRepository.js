const genericRepository = require('./GenericRepository');

const tableName = "exam_laboratory";

const create = async (laboratory, exam) => {
    const query = `INSERT INTO ${tableName} (laboratory, exam) VALUES ($1, $2) RETURNING *`;
    const params = [
        laboratory, 
        exam
    ];
    return await genericRepository.executeQueryAndExtractOne(query, params);
}

const getOne = async (id) => {
    const query = `SELECT * FROM ${tableName} where id = $1`;
    return await genericRepository.executeQueryAndExtractOne(query, [ id ])
}

const remove = async (associationId) => {
    const query = `DELETE FROM ${tableName} WHERE id = $1`;
    return await genericRepository.executeQueryAndExtractOne(query, [associationId]);
}

module.exports = {
    create,
    remove,
    getOne
}