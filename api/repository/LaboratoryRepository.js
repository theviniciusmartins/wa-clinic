const genericRepository = require('./GenericRepository');

const tableName = "laboratory";

const create = async (name, location) => {
    const query = `INSERT INTO ${tableName} (name, location, active) VALUES ($1, $2, $3) RETURNING *`;
    const params = [
        name, 
        location, 
        true
    ];
    return await genericRepository.executeQueryAndExtractOne(query, params);
}

const update = async (id, body) => {
    const query = genericRepository.createUpdateQuery(tableName, body);
    const params = [Object.values(body), id].flat()
    return await genericRepository.executeQueryAndExtractOne(query, params)
}

const getAll = async () => {
    const query = `SELECT * FROM ${tableName} WHERE active IS TRUE`;
    return genericRepository.executeQueryAndExtractAll(query, null);
}

const getOne = async (id) => {
    const query = `SELECT * FROM ${tableName} where id = $1`;
    return await genericRepository.executeQueryAndExtractOne(query, [ id ])
}

module.exports = {
    create,
    getAll,
    update,
    getOne
}