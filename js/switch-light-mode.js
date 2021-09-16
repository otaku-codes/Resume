function lightMode() {

    var cssId = 'myCss';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/switch-light-mode.css';
        link.media = 'all';
        head.appendChild(link);

    }
}

function darkMode() {
    document.getElementById("myCss").remove();
}

var x = 0;

function switchMode() {
    var elem = document.getElementById("switch-btn");
    if (x == 0) {
        lightMode();
        elem.innerHTML = 'Dark Mode';
        x++;
    } else {
        darkMode();
        elem.innerHTML = 'Light Mode';
        x = 0;
    }
}
