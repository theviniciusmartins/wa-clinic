const genericRepository = require('./GenericRepository');

const tableName = "exam_type";

const getAll = async () => {
    const query = `SELECT * FROM ${tableName} WHERE active IS TRUE`;
    return genericRepository.executeQueryAndExtractAll(query, null);
}

const getOne = async (id) => {
    const query = `SELECT * FROM ${tableName} where id = $1`;
    return await genericRepository.executeQueryAndExtractOne(query, [ id ])
}

module.exports = {
    getAll,
    getOne
}