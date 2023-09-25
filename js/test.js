//Working with Linear Data Structures Arrays
/*/1.write a script to print all array values in the console.
var arr=[1,2,3,4];
console.log(arr);*/
/*//2.For the Given array: [23,34,54,0,4,7] print all the Array values using a for loop. Expected output: 23 34 54 0 4 7
var arr=[23,34,54,0,4,7];
for(var i=0;i<=arr.length-1;i++){
console.log(arr[i]);
}*/
//3.print all numbers in an array except the first element. Expected output: 34 54 0 4 7
/*var myarray = [23,34,54,0,4,7];
    myarray.shift(); 
    console.log(myarray);*/
   /* var arr=[23,34,54,0,4,7];
    for(var i=1;i<=arr.length-1;i++){
    console.log(arr[i]);
    }*/
//4.Print all elements in an array except the last element Expected output: 23 34 54 0 4
/*var myarray = [23,34,54,0,4,7];
    myarray.pop(); 
    console.log(myarray)*/
   /* var arr=[23,34,54,0,4,7];
    for(var i=0;i<=arr.length-2;i++){
    console.log(arr[i]);
    }*/
//5.Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23
/*var arr=[23,34,54,0,4,7];
    for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
    }*/
//6.Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23
/*var arr=[23,34,54,0,4,7];
    for(var i=arr.length-1;i>=1;i--){
    console.log(arr[i]);
    }*/
//7.Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
/*var arr=[23,34,54,0,4,7];
    for(var i=arr.length-2;i>=0;i--){
    console.log(arr[i]);
    }*/
//8.Print only the last 4 elements of an array. Expected output: 54 0 4 7
  /* var arr=[23,34,54,0,4,7];
    for(var i=arr.length-4;i<=arr.length-1;i++){
    console.log(arr[i]);
    }*/
//9.For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
    var a=ar[0],b=ar[0];
    var arr=[23,34,54,0,4,7];
    for(var i=0;i<=arr.length-1;i--){
        if(arr[i]<a){
            a=ar[i];
        }
    console.log(arr[i]);
    } 
//10.For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
var a=ar[0],b=ar[0];
for(var i=0;i<=ar.length-1;++i){
    if(ar[i]>a){
        a=ar[i];
    }
}
console.log(a);
//11.For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
/*  var arr=[23,34,54,10,4,7],sum=0;
    for(var i=0;i<=arr.length-1;i++){
        sum=sum+arr[i];
    }console.log(sum);*/
//12.For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
 /*var arr=[23,34,54,10,4,7],sum=0,c=0,avg;
    for(var i=0;i<=arr.length-1;i++){
        sum=sum+arr[i];
        c++;
    }avg=sum/c;
    console.log(avg);*/
//13.For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
 /*   var arr=[23,34,54,0,4,7];
    var c =prompt("",$c);
    for(var i=arr.length-1;i>=1;i--){
        if(arr[i]>c){
    console.log(arr[i]);}
    }   */
//14.For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
/*var arr=[23,34,54,10,4,7];
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
        }
    }   */
//15.For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
/*var arr=[23,34,54,0,4,7];
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2!==0){
        console.log(arr[i]);
    }
}   */
//16.For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
/*var arr=[23,-34,-54,10,-4,7];
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]>=0){
        console.log(arr[i]);
    }
}   */
//17.For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, Expected output: true Given number: 26, Expected output: false
//18.For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1
//19.For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
//20.For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array Expected output: 23,34,54,10,7
//21.a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [ ] Expected output: br = [23,34,54,10,4,7]
//22.Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
//23.Reduce the each element of the array by 25% and store in a separate array.
//24.Store only even numbers of a given array in another array.
/*var ar=[1,2,3,4,5,8],even=[];
for(var i=0;i<=ar.length-1;i++){
if(ar[i]%2===0){
    even.push(ar[i]);
}
}console.log(even); */
//25.create a duplicate array for a given array.
//26.Eliminate duplicates from a array
//27.print only the perfect squares in an array
 /*var ar=[1,2,4,5,7,16,9],sq;
    for(var i=0;i<=ar.length-1;i++){
    sq=ar[i]*ar[i];
    for(var j=0;j<=ar.length-1;j++){
        if(sq==ar[j]){
        console.log(ar[i]);}
    }
}*/
//28.Print only the 2 digit numbers from an array
//29.Print only multiples of 5 from an array

//30.Print only multiples of 2 AND 3 from an array
//31.Print only multiples of 3 OR 5 from an array
//32.Increment 5% for all the salaries in a given array
//33.For every basic salary present in the array, add 40% HRA, 92% DA, 10% Tax and display the final output
//34.For every salary, deduct 10% tax for salaries less than 50000 and deduct 12% tax for salaries more than 50000
//35.Print only those odd numbers in a given array which are divisible by 3.
//36.Insert first 10 odd numbers in an empty array(for and while).
//37.Print the elements present in the second half of the array.
//38.Print the greatest of all 2-digit numbers present in an array.
//39.Write a program to remove elements from an array which are not in the ascending order Ex: Original array: [12,34,11,56,37,98,23,67,109,45] Output : [12,34,56,98,109]
/*40.Write a program to sort the array based on the number of occurrences of elements Ex: original array: [1,2,5,6,2,1,6,1,2,6,2,1,2]; After the logic: [5,6,6,6,1,1,1,1,2,2,2,2,2]; //5 occurred one time,6 three times,1 occurred 4 times, 2 occurred 5 times
//41.                       var ar = [19,12,23,4,15];
                            var br = [26,37,18,79,10];
                            a)Write script to merge array as the values of ar in the first and values of br next
                                Expected output: [19,12,23,4,15,26,37,18,79,10];
                            b)Write script to merge array as the values of ar in the first and values of br next
                                Expected output: [26,37,18,79,10,19,12,23,4,15];
                        
//42.                            var ar = [1,2,3,7,8,9];
                            var br = [4,5,6];
                            Expected output: [1,2,3,4,5,6,7,8,9];
                        
//43.insert An Element Desired or Specific Position In An Array
//44.Remove Duplicates Items In An Array
//45.Delete Element From Array At Desired Or Specific Position
//46.Check String Is Palindrome Or Not Using For Loop
//47.Convert All Input String Simultaneously Into Asterisk ( * )
//48.Read and print elements of the array. – using recursion.
//49.Print all negative elements in an array.
/*var arr=[1,0,-5,-6,46,45];
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]<0){
        console.log(arr[i]);
    }
}*/
//50.Sum of all array elements. – using recursion.
//51.Find a maximum and minimum element in an array. – using recursion.
//52.Get the second largest element in an array.
//53.Count the total number of even and odd elements in an array.*/
/*var arr=[1,2,3,4,5,6,6,8],c=0,s=0;
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2!==0){
        c++;
    }else{ s++;}
}console.log("even count: ",s);
 console.log("odd count:", c)*/
//54.Count the total number of negative elements in an array.
/*var arr=[-1,0,-5,-6,46,45],c=0;
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]<0){
       c++;
    }
} console.log(c);*/
//55.Copy all elements from an array to another array.
//56.Insert an element in an array.
/*var ar=[1,2,3,4,5,6];
ar.push(6);
ar.unshift(8);
console.log(ar);    */
//57.Delete an element from an array at the specified position.
/*var arr=[2,4,6,8,7,5,3,1];
delete arr[2];
console.log(arr);*/
//58.Count frequency of each element in an array.
//59.Print all unique elements in the array.
/*var a = [1,2,1,4,2,4,2,6];
var unq = a.filter(function(value,index,array){
    a.indexOf(value) === value;
});
console.log(unq);*/
//60.Count the total number of duplicate elements in an array.
//61.Delete all duplicate elements from an array.
//62.Merge two arrays to the third array.
/*var a=[1,2,3],b=[4,5,6];
for(var i=0;i<=b.length-1;i++){
a.push(b[i]);}
console.log(a); */
//63.Find the reverse of an array.
/*var ar=[2,8,5,9,3,6,3];
ar.reverse();
console.log(ar);*/
//64.Put even and odd elements of an array in two separate arrays.
/*var arr=[1,2,3,4,5,6],eve=[],odd=[];
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2===0){
        eve.push(arr[i]);
    }else{ odd.push(arr[i]); }    
}console.log(eve);console.log(odd); */
//65.Search an element in an array.
//66.Sort array elements in ascending or descending order.
/*var ar= [1, 5, 8, 4, 0, 3, 6];
ar.sort(function(a,b)); //[0, 1, 3, 4, 5, 6, 8]
console.log(ar);
ar.reverse(); //[8, 6, 5, 4, 3, 1, 0]*/
//67.Sort even and odd elements of the array separately.
//68.Right rotate an array.
