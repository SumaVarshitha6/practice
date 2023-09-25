var ar=[4,6,9,10,2,1];
var a=ar[0],b=ar[0];
for(var i=0;i<=ar.length-1;++i){
    if(ar[i]>a){
        a=ar[i];
    }
    else if(ar[i]<b){
        b=ar[i];
    }
}
console.log(a);
console.log(b);