var express = require('express');
var cors = require('cors');
var app = express();
var Customer = require('./Customer');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/customers',(req,res)=>{
    Customer.find({}).then((data)=>{
        let customers = data;
        res.json(customers);
    })
})

app.post('/addcustomer',(req,res)=>{
    console.log(req.body);
    let newCustomer = new Customer(req.body)
    newCustomer.save();
    res.json(newCustomer);
})

app.delete('/deletecustomer/:id',(req,res)=>{
    console.log("coming")
    console.log(req.params);
    Customer.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        console.log(data);
    })
})

app.get('/updatecustomer/:id',(req,res)=>{
    console.log("coming da")
    console.log(req.params);
     Customer.findById({_id:req.params.id}).then((data)=>{
        console.log('data',data);
        let customers = data;
        res.json(customers);
    })
})

app.put('/updatecustomer/:id',(req,res)=>{
    console.log("coming updateid")
    console.log(req.params);
    console.log("re.body",req.body);
     Customer.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        let customers = data;
        res.json(customers);
    })
})

app.listen(4600,()=>{
    console.log("running on 4600");
})
