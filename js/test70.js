//For the given Object Solve the following
var products = [
{
                                "name": "Duracell - AAA Batteries (4-Pack)",
                                "type": "HardGood",
                                "price": 5.49,
                                "category": "Household Batteries",
                                "manufacturer": "Duracell",				
                            },
                            {
                                "name": "Hard Rock TrackPak - Mac",
                                "type": "Software",
                                "price": 29.99,
                                "category": "Recording Equipment",
                                "manufacturer": "Hal Leonard",				
                            },
                            {
                                "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
                                "type": "HardGood",
                                "price": 5.62,
                                "category": "Household Batteries",
                                "manufacturer": "Duracell",				
                            },
                            {
                                "name": "Energizer - MAX Batteries AA (4-Pack)",
                                "type": "HardGood",
                                "price": 5.32,
                                "category": "Household Batteries",
                                "manufacturer": "Energizer",				
                            },
                            {
                                "name": "METRA - Antenna Cable Adapter - Black",
                                "type": "HardGood",
                                "price": 13.99,
                                "category": "Antennas & Adapters",
                                "manufacturer": "Metra",				
                            },
                            {
                                "name": "WipeDrive Six - Mac|Windows",
                                "type": "Software",
                                "price": 23.99,
                                "category": "Maintenance Software",
                                "manufacturer": "White Canyon",				
                            }
                        ];
                        
/*//1.Print all the product names.
        for(var f in products){
        console.log(products[f].name);}     */
/*//2.Print all the hardgoods.
        for(var f in products){
            if(products[f].type==='HardGood'){
            console.log(products[f])
            }
        }           */                    
/*3//.Print all the softwares.
        for(var f in products){
            if(products[f].type==='Software'){
            console.log(products[f])
            }
        }           */
/*//4.Print all the categories.
        for(var f in products){ 
            console.log(products[f].category);
        }           */   
/*//5Print only the products manufactured by Duracell.
        for(var f in products){
            if(products[f].manufacturer==='Duracell'){
            console.log(products[f])
            }
        }           */
//6.Print the product names in ascending order of their prices.

/*//7.Print only those products whose price is more than 14.99.
for(var f in products){
    if(products[f].price>14.99){
    console.log(products[f])
    }
}           */
/*//8.Print only those products whose price is less than 9.99.
        for(var f in products){
            if(products[f].price<9.99){
            console.log(products[f])
            }
        }           */
/*//9.Print the total price of all the hardgoods.
        var tot = 0;
        for(var f in products){
            if(products[f].type==='HardGood'){
                tot=tot+(products[f].price);
            }
        }
        console.log(tot);   */
/*//10.Print the average price of the softwares.
        var total = 0,count=0;
        for(var f in products){
            if(products[f].type==='Software'){
                total=total+products[f].price;
                count++;    //count=count+1;
            }
        }
        var avg=total/count;
        console.log(avg);
/**/