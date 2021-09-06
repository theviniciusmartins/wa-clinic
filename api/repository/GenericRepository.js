const db = require("../config/database");

const createUpdateQuery = (tableName, body) => {
    var query = [`UPDATE ${tableName}`];
    query.push('SET');
  
    var set = [];
    Object.keys(body).forEach(function (key, i) {
      set.push(`${key} = ($${(i + 1)}) `); 
    });

    query.push(set.join(', '));

    const idParamNumber = set.length + 1
    query.push(`WHERE id = $${idParamNumber} RETURNING *`);
  
    return query.join(' ');
}


const executeQueryAndExtractOne = async (query, params) => {
  let data = {};
  const databaseResultSet = await db.query(query, params);
  
  const rows = databaseResultSet.rows;

  if (rows.length > 0) {
      data = rows[0];
  }

  return data;
}

const executeQueryAndExtractAll = async (query, params) => {
  const databaseResultSet = await db.query(query, params);
  return databaseResultSet.rows;
}

module.exports = {
    createUpdateQuery,
    executeQueryAndExtractOne,
    executeQueryAndExtractAll
}