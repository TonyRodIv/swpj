
const rotateScreen = document.getElementById('error');
const switchBody = document.getElementById('switchBody');

function verificarLargura() {
    let largura = window.innerWidth;
    if (largura < 800) {
        rotateScreen.style.display = 'flex'
        switchBody.style.display = "none"
    } else {
        rotateScreen.style.display = 'none'
        switchBody.style.display = "block"
    }
}
verificarLargura();
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