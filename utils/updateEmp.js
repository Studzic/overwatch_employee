
const restartQuestions = require('./inquiries/restartQuestions');

async function updateEmp(connection, updateType, empId){
    await connection.promise().query(
        `UPDATE employees SET ? WHERE ?`, 
        [
            updateType,
            {id: empId}
        ]
    )
        
}

module.exports = updateEmp;