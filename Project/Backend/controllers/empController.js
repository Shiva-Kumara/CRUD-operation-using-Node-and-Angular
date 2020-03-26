const express = require('express');
var router = express.Router();
var ObjectId = require('pg').types.ObjectId;
var Employee  = require('../models/employee');

router.get('/', (req, res) => 
    Employee.findAll()
    .then(emp => {
        console.log("working");
        res.send(emp);
    })
    .catch(err => console.log(err)));



router.get('/:id', (req, res) => {

    Employee.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(retData => {
        console.log("Getting Data");
        res.send(retData);
    })
    .catch(err => console.log(err))
});


router.post('/', (req,res) => {
    const emp = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        office: req.body.office,
        salary: req.body.salary
    });
    let {id, name, designation, office, salary } = emp;
    Employee.create({
        id,
        name,
        designation,
        office,
        salary
    })
    .then(empData => res.send(empData))
    .catch(err => console.log(err));
});



router.put('/:id', (req, res) => {
    Employee.findOne({where: {id: req.params.id}})
    .then(gData => {
        console.log("Get Data", gData);
        gData.update({
            name: req.body.name,
            designation: req.body.designation,
            office:req.body.office,
            salary: req.body.salary
        })
            .then(upDate => {
                console.log("Updated Successfully", upDate);
                res.send(upDate);
            })
            .catch(err => {
                console.log("Error at updating");
            })
        }).catch(err =>{
            console.log(err);
    });
});

router.delete('/:id', (req, res) => {
    Employee.findOne({where: {id: req.params.id}})
    .then(dData => {
        console.log("Find Data", dData);
        res.send(dData);
        console.log(dData.id);
        dData.destroy({
            where: {id: dData.id}
        })
        .then(del => {
            console.log("Data deleted Successfully", del);
            res.send(del);
        })
        .catch(err =>{
            console.log("Error at Deleting");
        })
    }).catch(err => console.log(err)) 
})



module.exports = router;