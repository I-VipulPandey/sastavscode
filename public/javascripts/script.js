

function fileCreate(){

    var flag=0;
    document.querySelector("#add-file").addEventListener("click",function(){
    
    if (flag===0){
    
        document.querySelector(".file-input").style.display="block";
        flag=1;
    }
    
    else{
        document.querySelector(".file-input").style.display="none";
    flag=0;
    }
    
    
    })

}

function folderCreate(){

    
var flag=0;
document.querySelector("#add-folder").addEventListener("click",function(){

if (flag===0){

    document.querySelector(".folder-input").style.display="block";
    flag=1;
}

else{
    document.querySelector(".folder-input").style.display="none";
flag=0;
}


})

}


fileCreate();
folderCreate();