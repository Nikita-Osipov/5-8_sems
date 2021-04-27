window.onload = onLoad; //без этого нет регистрации нажатий на объекты окон onLoad
function onLoad() {
    var rectangle = document.querySelector('.rectangle');
    console.log("onload");
    var timer;
    rectangle.addEventListener('click', function(event) {
        var el = event.target;
        if (el.classList.contains('circle')) {
            if (event.detail == 1) {
                timer = setTimeout(function() {
                    el.classList.toggle('selected');
                }, 300);
            } else if (event.detail == 2) {
                clearTimeout(timer);
                el.parentNode.appendChild(el);
            }
        }
    });
}

function addCircle() {
    console.log("add");
    var rectangle = document.querySelector('.rectangle');
    var el = document.createElement("div");
    el.innerHTML = rectangle.children.length + 1;
    el.classList.add('circle');
    rectangle.appendChild(el);
}