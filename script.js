function disableExiting() {
    window.onbeforeunload = function() {
        return "Are you sure you want to leave?";
    };

    window.addEventListener('keydown', function (e) {
        if (e.key === "F4" || (e.ctrlKey && (e.key === 'w' || e.key === 't' || e.key === 'W' || e.key === 'T'))) {
            e.preventDefault();
        }
    });

    document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

function enableInteraction() {
    document.body.style.pointerEvents = 'auto';
    window.onbeforeunload = null;
}

disableExiting();

let timerDuration = 50000;
setTimeout(enableInteraction, timerDuration);
