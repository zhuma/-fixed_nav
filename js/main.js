/**
 * Created by hanshaojie-pc on 2017/3/8.
 */
window.onload= function () {
    var oNav=document.getElementById("nav");
    var oUl=oNav.getElementsByTagName("ul")[0];
    var oLi=oUl.getElementsByTagName("li");
    var oSec=document.getElementsByTagName("section");
    var t=oNav.offsetTop;
    window.onscroll=function(){
        var sTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop > t){
            oNav.style.top=sTop+"px";
        }
        else
        {
            oNav.style.top=t+"px";
        }
        for(var i=0; i<oSec.length; i++){
            oSec[i].style.top=oSec[i].offsetTop+"px";
            oSec[i].style.left=oSec[i].offsetLeft+"px";
            if(sTop>oSec[i].offsetTop){
                for(var j=0; j<oLi.length; j++){
                    oLi[j].className='';
                }
                oLi[i].className="bk";
            }
//                console.log(oSec[i].offsetTop+'---'+sTop);
        }
        for(var i=0; i<oSec.length; i++){
            oSec[i].style.position="absolute";
        }
    }
}