let yes=document.getElementById("yes");
let no=document.getElementById("no");
let size=18;
let clicks=0;
no.addEventListener("click", function(){
    size+=50;
    clicks+=1;
    yes.style.fontSize=`${size}px`;
    if(clicks>3){
        size+=100;
        yes.style.fontSize=`${size}px`;
    }
});
function hide_proposal(){
    document.getElementById("proposal").style.display="none";
    document.getElementById("present").style.display="block";
}
function get_present(){
    document.getElementById("present").style.display="none";
    document.getElementById("letter").style.display="block";
    document.body.style.overflow="auto";
}