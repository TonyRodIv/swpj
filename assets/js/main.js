
const rotateScreen = document.getElementById('error');
const switchBody = document.getElementById('switchBody');
const screenArea = document.getElementById('screenArea');

function verificarLargura() {
    let largura = window.innerWidth;
    console.log('verificando largura...', largura)
    if (largura < 650) {
        console.log('Largura incompatível')
        rotateScreen.style.display = 'flex'
        switchBody.style.display = "none"
    } else {
        rotateScreen.style.display = 'none'
        switchBody.style.display = "block"
    }
}
verificarLargura();
window.addEventListener("resize", verificarLargura);

function noJoyconF11() {
    var joycon = document.querySelectorAll('.joy-con');

    joycon.forEach(function (element) {
        element.style.display = 'none';
    });
    screenArea.style = 'height: 100vh; width: 100vw;'
}

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