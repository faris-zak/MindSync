async function checkGrammar(text, language) {
    const response = await fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'text': text,
            'language': language, // 'ar' for Arabic, 'en' for English
        })
    });

    const data = await response.json();
    displayGrammarErrors(data.matches);
}

function displayGrammarErrors(matches) {
    const errorList = document.getElementById('errorList');
    errorList.innerHTML = ''; // Clear previous errors
    
    matches.forEach(match => {
        const errorItem = document.createElement('li');
        errorItem.textContent = `${match.message} - اقتراح: ${match.replacements.map(rep => rep.value).join(', ')}`;
        errorList.appendChild(errorItem);
    });
}

let typingTimer;               
const doneTypingInterval = 2000;

document.getElementById('essayInput').addEventListener('input', function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        const text = document.getElementById('essayInput').value;
        const language = /[\u0600-\u06FF]/.test(text) ? 'ar' : 'en'; // Detect Arabic characters
        checkGrammar(text, language);
    }, doneTypingInterval);
});
