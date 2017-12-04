
var intervalIdentifier1;
var intervalIdentifier2;
var intervalIdentifier3;
var isStarted1 = false;
var isStarted2 = false;
var isStarted3 = false;
var count1 = 1500;
var count2 = 300;
var count3 = 600;

function counter1() {
    
    var minutes = Math.floor(count1 / 60);
    var seconds = Math.floor(count1 % 60);
    if(count1==0) {
        count1 = 1500;
        clearInterval(intervalIdentifier1);
        //document.getElementById("pomstart").innerHTML="25:00";
    }
    count1--;
    document.getElementById("pomstart").innerHTML= minutes + ":" + seconds;
    
    if (seconds==0) {
        document.getElementById("pomstart").innerHTML= minutes + ":" + seconds + "0";
    }
    if (seconds==1 || seconds==2 || seconds==3 || seconds==4 || seconds==5 || seconds==6 || seconds==7 || seconds==8 || seconds==9)  {
    document.getElementById("pomstart").innerHTML= minutes + ":" + "0" + seconds;
    }
}

function start1() {
    if (!isStarted1) {
    intervalIdentifier1 = setInterval(counter1, 1000);
        isStarted1 = true;
    } else { return; }
        
    
}



function counter2() {
    
    var minutes = Math.floor(count2 / 60);
    var seconds = Math.floor(count2 % 60);
    if(count2==0) {
        count2 = 300;
        clearInterval(intervalIdentifier2);
        //document.getElementById("short").innerHTML="5:00";
        
    }
    count2--;
    document.getElementById("short").innerHTML= minutes + ":" + seconds;
    
    if (seconds==0) {
       document.getElementById("short").innerHTML= minutes + ":" + seconds + "0";
    }
    if (seconds==1 || seconds==2 || seconds==3 || seconds==4 || seconds==5 || seconds==6 || seconds==7 || seconds==8 || seconds==9)  {
    document.getElementById("short").innerHTML= minutes + ":" + "0" + seconds;
    
}
}

function start2() {
    if (!isStarted2) {
    intervalIdentifier2 = setInterval(counter2, 1000);
        isStarted2 = true;
    } else { return; }
        
    
}
    


function counter3() {
    
    var minutes = Math.floor(count3 / 60);
    var seconds = Math.floor(count3 % 60);
    if(count3==0) {
        count3=600;
        clearInterval(intervalIdentifier3);
        document.getElementById("long").innerHTML=minutes + ":" + seconds;
        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;
    }
    count3--;
    document.getElementById("long").innerHTML= minutes + ":" + seconds;
    
        if (seconds==0) {
        document.getElementById("long").innerHTML= minutes + ":" + seconds + "0";
    }
    if (seconds==1 || seconds==2 || seconds==3 || seconds==4 || seconds==5 || seconds==6 || seconds==7 || seconds==8 || seconds==9)  {
    document.getElementById("long").innerHTML= minutes + ":" + "0" + seconds;
}
}

function start3() {
    if (!isStarted3) {
    intervalIdentifier3 = setInterval(counter3, 1000);
        isStarted3 = true;
    } else { return; }
        
    
}



function pause() {
    
    clearInterval(intervalIdentifier1);
    clearInterval(intervalIdentifier2);
    clearInterval(intervalIdentifier3);
    isStarted1 = false;
    isStarted2 = false;
    isStarted3 = false;
   
}


function reset() {
    clearInterval(intervalIdentifier1);
    clearInterval(intervalIdentifier2);
    clearInterval(intervalIdentifier3);
    count1 = 1500;
    count2 = 300;
    count3 = 600;
    document.getElementById("pomstart").innerHTML="25:00";
    document.getElementById("short").innerHTML="5:00";
    document.getElementById("long").innerHTML="10:00";
    isStarted1 = false;
    isStarted2 = false;
    isStarted3 = false;
}