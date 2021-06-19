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





var current = {x: 0, y: 0, zoom: 1},
    con = document.getElementById('svg2');

window.onclick = function(e) {
    var coef = e.shiftKey || e.ctrlKey ? 0.5 : 10,
        oz = current.zoom,
        nz = (current.zoom *= coef),
        /// calculate click at current zoom
        ix = (e.clientX - current.x) / oz,
        iy = (e.clientY - current.y) / oz,
        /// calculate click at new zoom
        nx = ix * nz,
        ny = iy * nz,
        /// move to the difference
        cx = (current.x = ix - nx),
        cy = (current.y = iy - ny)
    ;
    /// make sure we translate before scale!
    con.style.transform
        = 'translate('+cx+'px, '+cy+'px) '
        + 'scale('+nz+')'
    ;
};