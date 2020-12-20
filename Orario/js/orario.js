var timeout;

window.onload = function() {
    actualLesson();
};

function showCode(tdId) {
    let td = document.getElementById(tdId);
    let span = document.getElementById("span" + tdId);
    span = span.innerHTML;
    
    let copyDiv = document.getElementById("div-copy");
    let codeDiv = document.getElementById("div-code");

    clearTimeout(timeout);
    $('#div-copy').hide();

    if (span === "0" || span === null) {
        codeDiv.className = "div-code";

        $('#codeTxt').text("Clicca su una materia per visualizzare e copiare il codice");
        $('#code').hide();
        $('#code').text("");
    } else {
        codeDiv.className = "div-code";
        codeDiv.className += " codeShow";

        $('#codeTxt').text("Codice:");
        $('#code').text(span);
        $('#code').css({'display':'inline', 'text-decoration':'underline'});

        // Copy span text to clipboard
        let textArea = document.createElement("textarea");
        textArea.value = span;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();

        // Output done copy
        let copyTxt = document.getElementById("copyTxt");
        copyTxt.innerHTML = "Codice " + span +  " copiato";
        
        // Modifica css del popup e fa output
        copyDiv.className = td.className;
        $('#div-copy').fadeIn(500);
        
        location.href = "#";
        location.href = "#div-copy";

        timeout = setTimeout(function() { 
            $('#div-copy').fadeOut(); 
        }, 2000);
    }
}

function actualLesson() {
    let date = new Date();

    let minDate = (8 * 60) + 5; // 8 = hours, 60 = minutes per hours, 5 = minutes
    let maxDate = (13 * 60);

    let gg = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let actualDate = (hours * 60) + minutes;

    if (gg === 0) return;

    let ggLesson = document.getElementById("gg" + gg);
    ggLesson.className = "ggActual";
    ggLesson.innerHTML += " (Oggi)";

    if (actualDate < minDate || actualDate > maxDate) return;

    let timeStep;

    if (gg === 2 || gg === 5) {
        timeStep = 50;
    } else {
        timeStep = 60;
    }

    // Formula matematica trovata pensando :D
    let selId = gg + (7 * (Math.floor((actualDate - minDate) / timeStep)));

    let lesson = document.getElementById(selId);
    lesson.className += " actual";
}