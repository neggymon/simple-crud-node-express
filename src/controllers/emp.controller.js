const empModel = require('../models/emp.model');

// get all Employee
exports.getAllEmployee = (req, res) => {
   empModel.getAllEmployee((err, employees) =>{
       if(err)
       res.send(err);
       res.send(employees);
   });
}

// get employee by Id
exports.getEmployeeById = (req, res) => {
    empModel.getEmployeeById(req.params.id, (err, employees) =>{
        if(err)
        res.send(err);
        res.send(employees);
    });
 }

 // create new employee
 exports.createNewEmployee = (req, res) => {
     const empReqData = new empModel(req.body);
     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success: false, message: 'Please input employee infos'});
     }
     else{
         empModel.createNewEmployee(empReqData, (err, empReqData) => {
             if(err){
                 res.send(err);
                 res.json({status: false, message: `There is an error creating a new employee: ${err}`});
             }
             else{
                empModel.createNewEmployee(empReqData, (err, empReqData) => {
                    if(err)
                    res.send(err);
                    res.json({status: true, message: 'New employee enrolled successfully', data: empReqData});
                });
             }
         });
     }
 }

 // update employee data
 exports.updateEmployee = (req, res) => {
    const empReqData = new empModel(req.body);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please input employee infos'});
    }
    else{
        empModel.createNewEmployee(empReqData, (err, empReqData) => {
            if(err){
                res.send(err);
                res.json({status: false, message: `There is an error updating an employee: ${err}`});
            }
            else{
               empModel.createNewEmployee(empReqData, (err, empReqData) => {
                   if(err)
                   res.send(err);
                   res.json({status: true, message: 'Employee data is successfully updated', data: empReqData});
               });
            }
        });
    }
 }

 // delete employee
 exports.deleteEmployee = (req, res) => {
    empModel.deleteEmployee(req.params.id, (err) => {
         if(err)
         res.send(err);
         res.json({success: true, message: 'Employee is deleted successfully'});
     });
 }