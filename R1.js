const questions = [
    "Welche Art von rechtlichen Dienstleistungen benötigen Sie?",
    "In welchem Rechtsgebiet benötigen Sie Unterstützung?",
    "Wie groß ist Ihr Unternehmen?",
    // Fügen Sie hier weitere Fragen hinzu
];

const companies = [
    "Firma 1",
    "Firma 2",
    "Firma 3",
    "Firma 4",
    // Fügen Sie hier weitere Firmen hinzu
];

let currentQuestionIndex = 0;

document.getElementById("next-button").addEventListener("click", function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        // Speichern Sie die Antwort oder bewerten Sie sie nach Ihren Kriterien.
        
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayResult(answerValue);
        }

        selectedAnswer.checked = false; // Zurücksetzen der Auswahl
    }
});

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = `Frage ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}`;
}

function displayResult(answerValue) {
    const resultText = document.getElementById("result-text");
    const recommendedCompany = document.getElementById("recommended-company");
    
    resultText.textContent = "Basierend auf Ihren Antworten empfehlen wir Ihnen folgende Firma:";
    recommendedCompany.textContent = answerValue; // Hier können Sie die Empfehlung basierend auf den Benutzerantworten generieren.

    const answersDiv = document.getElementById("answers");
    answersDiv.style.display = "none";
    
    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
}

displayQuestion();
