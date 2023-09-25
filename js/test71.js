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



/*//1.Print all the firstnames.
        for(var f in people){
        console.log(people[f].firstname);
        }       */
/*//2.Print all the full names.
        for(var f in people){
        console.log((people[f].firstname).concat(" ",(people[f].lastname)));
        }       */
/*//3.Print only those names whose age is more than 25.
        for(var f in people){
            if(people[f].age>25){
            console.log(people[f].firstname);
            }  
        }       */
/*//4.Print all female names.
        for(var f in people){
            if(people[f].gender==='female'){
            console.log(people[f].firstname);
            }
        }  */
/*//5.Print only those names whose salary is more than 25000 and increase their salaries by 15%.
        var cur=0,inc=0;
        for(var f in people){
            if(people[f].salary>25000){
            console.log(people[f].firstname);
            cur=people[f].salary;
            inc=((cur*100)*0.15)+cur;
            console.log("salary increase by %15 : " , inc);
        } }     */
/*6.Using prompt, print only those names whose city is "hyd".
        
        for(var f in people){
            var city= prompt("enter a city :");
            if(people[f].city==='hyd')
            {
                conosole.log(people[f].firstname);
            }
        }       */
/*//7.Print the total salary of all the people.
        var total=0;
        for(var f in people){
           total=total+people[f].salary;
        }
            console.log(total);         */
/*//8.Print all the female names.
        for(var f in people){
            if(people[f].gender==='female'){
            console.log(people[f].firstname);
            }
        }       */
/*//9.Print all the firstnames whose salary is more than 25000.
        for(var f in people){
            if(people[f].salary>25000){
            console.log(people[f].firstname);
            }
        }  */
//10.Using prompt, print all names whose city is "hyd".
//11.Print all the fullnames in the alphabetical order.
//12.Print all the fullnames in the increasing order of their age.
//13.Print all the fullnames in the reverse alphabetical order.
//14.Print all the fullnames in the decreasing order of their salaries.
//15.Print all the cities in which the people live. There should not be any duplicate cities.
/*//16.Print all the male names whose age is greater than 25.
            for(var f in people){
            if(people[f].age>25 && people[f].gender==='male'){
            console.log(people[f].firstname);
            }  
        }           */
//17.Print all names that starts with "p" and the firstname should be in UPPERCASE. e.g. PRAVEEN gubbala.
