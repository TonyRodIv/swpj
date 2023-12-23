
const rotateScreen = document.getElementById('error');
let larguraFixed = window.innerWidth;

function verificarLargura() {
    let largura = window.innerWidth;
    if(larguraFixed<860){
        if (largura < 850) {
            rotateScreen.style.display = 'flex'
            rotateScreen.style.animation = 'none'
            console.log('rotate screen pls')
        } else {
            rotateScreen.style = 'animation: fade-out 1.5s; animation-fill-mode: forwards;'
        }
    }else{
        rotateScreen.style.display = 'none'
    }
}
verificarLargura()
window.addEventListener("resize", verificarLargura);
function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}