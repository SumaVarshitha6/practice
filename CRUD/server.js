var express = require('express');
var cors = require('cors');
var app = express();
var Student = require('./Student');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/students',(req,res)=>{
    console.log(req.body);
    Student.find({}).then((data)=>{
        let students = data;
        res.json(students);
    })
})

app.post('/addstudent',(req,res)=>{
    console.log(req.body);
    let newStudent = new Student(req.body)
    newStudent.save();
    res.json(newStudent);
})

app.delete('/deletestudent/:id',(req,res)=>{
    console.log("coming")
    console.log(req.params);
    Student.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        console.log(data);
    })
})

app.get('/updatestudent/:id',(req,res)=>{
    console.log("coming da")
    console.log(req.params);
     Student.findById({_id:req.params.id}).then((data)=>{
        console.log('data',data);
        let students = data;
        res.json(students);
    })
})

app.put('/updatestudent/:id',(req,res)=>{
    console.log("coming updateid")
    console.log(req.params);
    console.log("re.body",req.body);
     Student.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        let students = data;
        res.json(students);
    })
})

app.listen(4500,()=>{
    console.log("running on 4500");
})