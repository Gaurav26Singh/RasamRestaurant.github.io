var preloader = document.getElementsByClassName('preloader')[0];
function webview()
{
    preloader.style.display = "none";
}
let head = document.getElementsByTagName('header')[0];
let bar = document.getElementsByClassName('but')[0];
let cross = document.getElementsByClassName('pos2')[0];
function run() {
    head.style.left = "0%";
    head.style.position = "fixed";
    bar.style.display = "none";
    setTimeout(function () {
        cross.style.display = "inline";
    }, 900)
}

function back() {
    bar.style.display = "block";
    head.style.left = "-120%";
    cross.style.display = "none";

}


