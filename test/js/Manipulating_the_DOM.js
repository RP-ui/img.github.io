let Manipulating_the_DOM={
    "read":function (read_type,information){
        if(read_type=="id"){
            if(document.getElementById(information)!=null){
                return document.getElementById(information);
            }else{
                return null;
            }
        }
        if(read_type=="class"){
            if(document.getElementsByClassName(information).length!=0){
                let returns_an_array=[];
                for(let i=0;i<=document.getElementsByClassName(information).length;i++)
                    returns_an_array[i]=document.getElementsByClassName(information).length[i];

                return document.getElementsByClassName(information);
            }else{
                return null;
            }
        }
    },
    "effect":{
        "slide":function(direction,velocity,distance,id){
            
        },
    },
    "branch":true,
}