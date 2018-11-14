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


    
    function checkSpam(str){
        var a = str.toUpperCase();
        if(a.search("DIROL",0) >= 0 ){
             console.log("true"); 
        }
        else if(a.search("TWIX",0) >= 0 ){
            console.log("true");
        } 
        else if(a.search("SNICKERS",0) >= 0 ){ 
            console.log("true"); 
        }
        else{
             console.log("False")
        }
    }

    var str = prompt("Enter word: ");
     
    console.log(checkSpam(str));
    


       
 

