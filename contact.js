// Baza Twoich haseł
const quotes = [
    "Zajmuję się zabezpieczaniem przyszłości moich klientów. Estetyka strony może poczekać.",
    "Zaufanie buduje się latami, a nie layoutem. Jestem tam, gdzie potrzebują mnie klienci.",
    "Przepraszam, jestem zajęty zabezpieczaniem moich klientów. Strona musi poczekać, ich spokój nie może.",
    "Najlepsza polisa to taka, która działa. Moja strona nie musi – to ja muszę być skuteczny.",
    "Dobra strategia nie wypłaci odszkodowania, ale dobrze dobrany plan – owszem.",
    "Zamiast dopieszczać stronę, dopieszczam strategie dla moich klientów. Odezwij się, jeśli potrzebujesz konkretów.",
    "Zaufanie buduję przy kawie i w rozmowie, nie na serwerze. Strona powstanie, gdy wszyscy moi klienci będą już bezpieczni."
];

// Numer telefonu w Base64 (+48 508 473 105)
const secret = "KzQ4IDUwOCA0NzMgMTA1"; 

document.addEventListener("DOMContentLoaded", function() {
    // 1. Obsługa losowania cytatu
    const quoteElement = document.getElementById("dynamicQuote");
    if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = `"${quotes[randomIndex]}"`;
    }

    // 2. Obsługa odkrywania numeru
    const revealBtn = document.getElementById("revealBtn");
    const output = document.getElementById("phoneOutput");

    if (revealBtn && output) {
        revealBtn.addEventListener("click", function() {
            const fullNumber = atob(secret);
            const telLink = fullNumber.replace(/\s/g, "");

            revealBtn.style.display = "none";
            output.innerHTML = `<a href="tel:${telLink}">${fullNumber}</a>`;

            setTimeout(() => {
                output.classList.add('visible');
            }, 50);
        });
    }
});
