// var a;
// while(true)
// {
//     a = prompt("What is your name?");
//     if(a)
//     break; 
// }   

// console.log(a);

 

    // var string = prompt("Enter name: ")
    // var a="";
    
    // for(var i = 1; i < string.length;i++ )
    // {
    //     a+= string[i];
    // }
    // for(var i = string.length-1;i>=0 ;i-- )
    // {
    //   a += string[i];
    // }
    
    //var a =  string.split("").reverse().join("");

 
//    var a = string.substr(1);

//    console.log(parseInt(a));
 
 //---------------------------------------------------------
    // function trancate(str,num){
    //     return str.slice(0,num); 
    // }

    // var str = prompt("Enter word: ");
    // var num = parseInt( prompt("Enter number: "));

    // console.log(trancate(str,num));


    
    // function checkSpam(str){
    //     var a = str.toUpperCase();
    //     if(a.search("DIROL",0) >= 0 ){
    //          console.log("true"); 
    //     }
    //     else if(a.search("TWIX",0) >= 0 ){
    //         console.log("true");
    //     } 
    //     else if(a.search("SNICKERS",0) >= 0 ){ 
    //         console.log("true"); 
    //     }
    //     else{
    //          console.log("False")
    //     }
    // }

    // var str = prompt("Enter word: ");
    
    // console.log(checkSpam(str));




    // function Join(arr,str)
    // { 
    //     var string = "";
    //     for(var i = 0; i < arr.length;i++ )
    //     {
    //         string += arr[i] + str;
    //     }
    //    var a = string.slice(0, 0 - str.length);
    //      return a;
    // }

    // console.log(Join([1,2,3,4,5], "asdasdasds"));
    
   

    // function split(strArr,splitter)
    // {
    //     var arr = [];
    //     var match = 0;
    //     while(strArr.indexOf(splitter,match) !== -1 )
    //     { 
    //          var matchedIndex = strArr.indexOf(splitter,match);
    //          console.log(matchedIndex);
    //          arr.push(strArr.slice(match,matchedIndex));
    //          match = ++matchedIndex;
    //     } 
    //     arr.push(strArr.slice(matchedIndex,strArr.length));
    //     return arr; 
    // }

    // console.log(split("elnur , alim , hesen",","));




function deleteOnIndex(arr,index)
{ 
    var result = [];
    if(index < 0)
    {
        throw new error("This is an exception");
    }
    else if(index > arr.length)
    {
        for(var i = 0; i < arr.length;i++)
        {
           
        }
      
    }
 
}

     console.log(deleteOnIndex("1,2,3,4","10"));
