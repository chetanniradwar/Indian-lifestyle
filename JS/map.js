var tooltipSpan = document.getElementById('tooltip-span');
// var hoverTag= document.querySelectorAll( ":hover" );
window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
    // elementMouseIsOver = document.elementFromPoint(x, y);
    // if(elementMouseIsOver)
    // console.log(elementMouseIsOver);
};
$("path").hover(showCardData, hideCardData)
function showCardData() {
    var tooltipTag = document.getElementById("tooltip-span")
    // var card=document.getElementsByClassName("tooltip-content")
    var cardImg = document.getElementById("card-img")
    var cardHead = document.getElementById("card-heading")
    var cardSummary = document.getElementById("card-summary")
    tooltipTag.style.display = "block";
    console.log(this.id)
    switch (this.id) {
        case "IN-AN":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AP":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AR":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AD":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-BR":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-CH":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-CT":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-DD":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AN":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AN":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-MH":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;
        case "IN-AN":
            cardImg.src = ""
            cardHead.innerHTML = "fj"
            cardSummary.innerHTML = "chetan"
            console.log("hello")
            break;

    }

}

function hideCardData(tag) {
    var tooltipTag = document.getElementById("tooltip-span")
    tooltipTag.style.display = "none";

    if (tag.id == "IN-AN") {

    }
}

var iframe =document.getElementById("iframe-div")
var svg2=document.getElementById("svg2")
$("path").click(dothis)
function dothis()
{
   
var videoTag= document.getElementById("play-video")
iframe.style.display="block"

 svg2.style.display='none'
// var body=document.getElementsByTagName("body")
// body.style.background="rgba(0, 0, 0, 0.582)"

switch (this.id) {
    case "IN-AN":
        videoTag.src =""
        
        break;
    case "IN-AP":
        videoTag.src ="https://www.youtube.com/embed/_e01TCaGsQg"
        break;
}
}

function closeIframe()
{
iframe.style.display="none"
svg2.style.display="block"

}
// var current = {x: 0, y: 0, zoom: 1},
//     con = document.getElementById('svg2');
    
// window.onclick = function(e) {
//     var coef = e.shiftKey || e.ctrlKey ? 0.5 : 10,
//         oz = current.zoom,
//         nz = current.zoom * coef,
//         /// offset of container
//         ox = 300,
//         oy = 42,
//         /// mouse cords
//         mx = e.clientX - ox,
//         my = e.clientY - oy,
//         /// calculate click at current zoom
//         ix = (mx - current.x) / oz,
//         iy = (my - current.y) / oz,
//         /// calculate click at new zoom
//         nx = ix * nz,
//         ny = iy * nz,
//         /// move to the difference
//         /// make sure we take mouse pointer offset into account!
//         cx = (ix + (mx - ix) - nx),
//         cy = (iy + (my - iy) - ny)
//     ;
//     // update current
//     current.zoom = nz;
//     current.x = cx;
//     current.y = cy;
//     /// make sure we translate before scale!
//     con.style.transform
//         = 'translate('+cx+'px, '+cy+'px) '
//         + 'scale('+nz+')'
//     ;
// };