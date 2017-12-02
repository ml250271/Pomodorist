//function timerstart() {}

//function timerpause() {}

/*function whypause() {}

function donesound() {}*/

   function isNegative(num) {
    if (isNaN(num)) {
    return false;
    }
    return Math.min(num, 0) != 0;
    }


var count1 = 5*60; 
function countdown1() {
    
    var minutes= Math.floor(count1 / 60);
    var seconds = Math.floor(count1 % 60);
    if(count1 <0 ) {
        count1 = 5*60;
        clearInterval(intervalIdentifier1);
    }
    count1--;
   
    document.getElementById("shortbr").innerHTML = minutes + ":" + seconds;
}

function start1() {

    var intervalIdentifier1=setInterval(countdown1, 1000);

}

var count2 = 25*60; 
function countdown2() {
    
    var minutes= Math.floor(count2 / 60);
    var seconds = Math.floor(count2 % 60);
    if(count2 <0 ) {
        count2 = 25*60;
        clearInterval(intervalIdentifier2);
    }
    count2--;
   
    
     document.getElementById("pomstart").innerHTML = minutes + ":" + seconds;
}

function start2() {

    var intervalIdentifier2=setInterval(countdown2, 1000);

}


var count3 = 10*60; 
function countdown3() {
    
    var minutes= Math.floor(count3 / 60);
    var seconds = Math.floor(count3 % 60);
    if(count3 <0 ) {
        count3 = 10 * 60;
        clearInterval(intervalIdentifier3);
    }
    count3--;
   
    
     document.getElementById("pomstart").innerHTML = minutes + ":" + seconds;
}

function start3() {

    var intervalIdentifier3=setInterval(countdown3, 1000);

}

     

