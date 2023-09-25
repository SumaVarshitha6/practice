//function patterns
//error handling in functions
function quo(a,b,c){
    if(b!=0){
        var z=a/b;
        c(null,z)
    }
    else{
        c("please enter a valid arg",null)
    }
}
quo(10,1,function(err,res){
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})