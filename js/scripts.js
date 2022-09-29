window.onload = () => {
    
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }

    // Je récupére la classe toggle
    let toggle = document.querySelector('.toggle');
    // Je récupère le body
    let body = document.querySelector('body');
    
    toggle.addEventListener('click', function() {
        body.classList.toggle('open');
    })
}
