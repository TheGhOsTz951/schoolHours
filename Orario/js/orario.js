var timeout;

window.onload = function() {
    actualLesson();
};

function showCode(tdId) {
    let td = document.getElementById(tdId);
    let span = document.getElementById("span" + tdId);
    span = span.innerHTML;

    let codeText = document.getElementById("codeTxt");
    let codeDiv = document.getElementById("div-code");
    let copyDiv = document.getElementById("div-copy");

    clearTimeout(timeout);
    $('#div-copy').hide();

    if (span === "0" || span === null) {
        codeDiv.style.display = "none";
    } else {
        codeDiv.className = td.className;

        codeDiv.style.display = "block";
        codeText.innerHTML = span;

        // Copy span text to clipboard
        let textArea = document.createElement("textarea");
        textArea.value = span;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();

        location.href = "#";
        location.href = "#div-code";

        // Output done copy
        let copyTxt = document.getElementById("copyTxt");
        copyTxt.innerHTML = "Codice " + span +  " copiato";

        // Prende la posizione della casella
        //let x = (td.offsetLeft) + "px";
        //let y = (td.offsetTop) + "px";

        // Modifica css del popup
        //$('#div-copy').css({'background-color':td.style.backgroundColor});
        copyDiv.className = td.className;
        $('#div-copy').fadeIn(500);
        timeout = setTimeout(function() { 
            $('#div-copy').fadeOut(); 
        }, 3000);
    }
}

function actualLesson() {
    let date = new Date();

    let gg = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let selId;

    console.log(gg + " - " + hours + " - " + minutes);

    if (gg === 0) return;

    let ggLesson = document.getElementById("gg" + gg);
    ggLesson.className = "ggActual";
    ggLesson.innerHTML += " (Oggi)";

    if (hours < 8 || hours > 12) return;

    if (gg === 2 || gg === 5) {
        console.log("Da fare");
        return;
    } else {
        selId = gg + (7 * (hours - 8));

        if (minutes < 5) {
            selId = selId - 7;
        }
    }

    let lesson = document.getElementById(selId);
    lesson.className += " actual";
}