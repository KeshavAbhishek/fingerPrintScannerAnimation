var noDots = 0;
var object = {0:'',1:'.',2:'..',3:'...'};
var times = 1;

setInterval(() => {
    if(noDots<=3) {
        document.getElementById('scan').innerHTML=`Scanning${object[noDots]}`;
        noDots += 1;
    }
    else{
        noDots = 0;
        if(times%2==0){
            object = {0:'',1:'.',2:'..',3:'...'};
        }
        else{
            object = {0:'...',1:'..',2:'.',3:''};
        }
        times += 1;
    }
}, 1000);