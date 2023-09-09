const questions = [
    "Welche Art von rechtlichen Dienstleistungen benötigen Sie?",
    // Fügen Sie hier weitere Fragen hinzu
];

let currentQuestionIndex = 0;

document.getElementById("next-button").addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        // Speichern Sie die Antwort oder bewerten Sie sie nach Ihren Kriterien.

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            reffer(answerValue);
        }

        selectedAnswer.checked = false; // Zurücksetzen der Auswahl
    }
});

function displayQuestion() {
    // Hier sollten Sie den Code hinzufügen, um die Frage anzuzeigen
}

function reffer(answerValue) {
    // Automatische Weiterleitung nach 5 Sekunden
    if (answerValue === "1") {
        setTimeout(function () {
            window.location.href = "wagenbesitz.html";
        }, 0);
    } 
}
