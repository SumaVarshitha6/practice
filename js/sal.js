var people = [
    {
    "firstname": "praveen",
    "lastname": "gubbala",
    "age": 36,
    "gender": "male",
    "city": "hyd",
    "salary": 10000
    },
    {
    "firstname": "srikanth",
    "lastname": "gubbala",
    "age": 32,
    "gender": "male",
    "city": "bengaluru",
    "salary": 20000
    },
    {
    "firstname": "pradeep",
    "lastname": "reddy",
    "age": 21,
    "gender": "male",
    "city": "hyd",
    "salary": 25000
    },
    {
    "firstname": "mounika",
    "lastname": "mudiraj",
    "age": 20,
    "gender": "female",
    "city": "nalgonda",
    "salary": 30000
    },
    {
    "firstname": "nikhil",
    "lastname": "m",
    "age": 22,
    "gender": "male",
    "city": "guntur",
    "salary": 2000
    },
    {
    "firstname": "riya",
    "lastname": "bhadouria",
    "age": 14,
    "gender": "female",
    "city": "indore",
    "salary": 40000
    }
    ];
    var a=people[0].salary,b=people[0].salary;
    for(var i=0;i<=people.length-1;i++){
    if(people[i].salary>a){
        a=people[i].salary;
        var c=people[i];
    }
    else if(people[i].salary<b){
    b=people[i].salary;
    var d=people[i];
    }
}
console.log(c);
console.log(d);