const questions = [
    "Welche Leistungen brauchen Sie?",
    // Fügen Sie hier weitere Fragen hinzu
];

let currentQuestionIndex = 0;

document.getElementById("next-button").addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[type="checkbox"]:checked');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.id;
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
    // Zum Beispiel: document.querySelector('.question p').textContent = questions[currentQuestionIndex];
}

function reffer(answerValue) {
    // Automatische Weiterleitung nach 5 Sekunden
    if (answerValue != "") {
        setTimeout(function () {
            window.location.href = "versicherung.html";
        }, 0); // Weiterleitung nach 5 Sekunden
    }
}
