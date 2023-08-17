let manipulating_the_DOM={
    "effect":{
        "slide":function(index){
            /*direction,distance,velocity,func,id*/
            if(document.getElementById(index.id)!=null){
                if(document.getElementById(index.id).style.position.length==0){
                    document.getElementById(index.id).style.position="absolute";
                    console.log(document.getElementById(index.id)+","+document.getElementById(index.id).style.position);
                }
                if(index.direction=="up"){
                    for(let i=0;i<=Math.floor(+index.distance/index.velocity);i++){
                        setTimeout(function(){
                            document.getElementById(index.id).style.top=Number(document.getElementById(index.id).style.top.replace(/px/g,""))-index.velocity+"px";
                        },i);
                    }
                }
                if(index.direction=="right"){
                    for(let i=0;i<=Math.floor(+index.distance/index.velocity);i++){
                        setTimeout(function(){
                            document.getElementById(index.id).style.left=Number(document.getElementById(index.id).style.left.replace(/px/g,""))+index.velocity+"px";
                            if(index.func!=undefined)
                                console.log(index.func);
                        },i);
                    }
                }
            }else{
                return null;
            }
        },
    },
    "branch":true,
}