
const rotateScreen = document.getElementById('error');
const switchBody = document.getElementById('switchBody');
let larguraFixed = window.innerWidth;

function verificarLargura() {
    let largura = window.innerWidth;
    if (larguraFixed < 860) {
        if (largura < 860) {
            rotateScreen.style.display = 'flex'
            rotateScreen.style.animation = 'none'
            switchBody.style.display = "none"
        } else {
            rotateScreen.style = 'animation: fade-out 1.5s 0.8s; animation-fill-mode: forwards;'
            function rotate() {
                rotateScreen.style.display = 'none'
            }
            setTimeout(rotate, 1600)
            switchBody.style.display = "block"
        }
    } else {
        rotateScreen.style.display = 'none'
        switchBody.style.display = "block"

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
