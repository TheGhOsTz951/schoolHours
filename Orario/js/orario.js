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
        //let minGap = (hours - 8) * 10;

        //if (minutes <)

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