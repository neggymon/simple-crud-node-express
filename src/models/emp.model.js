var dbConn = require('../../config/db.config');

var Employee = function(employee) {
    this.empId = employee.empId;
    this.name = employee.name;
    this.email = employee.email;
    this.isActive = employee.isActive ? employee.isActive : 1;
    this.createdDate = new Date();
}

// get all employee
Employee.getAllEmployee = (result) => {
    dbConn.query('SELECT * FROM tbl_employees', (err, res) => {
        if(err) {
            console.log('There was an error fetching data.', err);
            result(null, err);
        }
        else {
            console.log('Successfully fetched the data');
            result(null, res);
        }
    })
}

// get employee by id 
Employee.getEmployeeById = (empId, result) => {
    dbConn.query('SELECT * FROM tbl_employees WHERE empId=?', empId, (err, res) => {
        if(err) {
            console.log('There was an error fetching data.', err);
            result(null, err);
        }
        else {
            console.log('Successfully fetched the data');
            result(null, res);
        }
    });
}

// create new employee
Employee.createNewEmployee = (empReqData, result) => {
    dbConn.query("INSERT INTO tbl_employees SET ? ", empReqData, (err, res) => {
        if(err){
            console.log('There is an error creating a new employee');
            result(null, err);
        }
        else{
            console.log('New employee is successfully recorded');
            result(null, res);
        }
    });
}

// update employee
Employee.updateEmployee = (empId, empReqData, result) => {
    dbConn.query('UPDATE tbl_employees SET name=?, email=? WHERE empId=?', [empReqData.name, empReqData.email, empId], 
    (err, res) => {
        if(err){
            console.log(`Error updating an employee: ${err}`);
            result(null, err);
        }
        else{
            console.log('Employee data is updated successfully');
            result(null, res);
        }
    });
}

// delete employee
Employee.deleteEmployee = async (empId, result) => {
    dbConn.query('UPDATE tbl_employees SET isActive = 0 WHERE empId=?', empId, 
    (err, res) => {
        if(err){
            console.log(`Error deleting an employee: ${err}`);
            result(null, err);
        }
        else{
            console.log('Employee is deleted successfully');
            result(null, res);
        }
    });
}

module.exports = Employee;