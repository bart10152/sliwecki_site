// Baza Twoich haseł
const quotes = [
    "Zajmuj\u0119 si\u0119 zabezpieczaniem przysz\u0142o\u015bci moich klient\u00f3w. Estetyka strony mo\u017ce poczeka\u0107.",
    "Zaufanie buduje si\u0119 latami, a nie layoutem. Jestem tam, gdzie potrzebuj\u0105 mnie klienci.",
    "Przepraszam, jestem zaj\u0119ty zabezpieczaniem moich klient\u00f3w. Strona musi poczeka\u0107, ich spok\u00f3j nie mo\u017ce.",
    "Najlepsza polisa to taka, kt\u00f3ra dzia\u0142a. Moja strona nie musi \u2013 to ja musz\u0119 by\u0107 skuteczny.",
    "Dobra strategia nie wyp\u0142aci odszkodowania, ale dobrze dobrany plan \u2013 owszem.",
    "Zamiast dopieszcza\u0107 stron\u0119, dopieszczam strategie dla moich klient\u00f3w. Odezwij si\u0119, je\u015bli potrzebujesz konkret\u00f3w.",
    "Zaufanie buduj\u0119 przy kawie i w rozmowie, nie na serwerze. Strona powstanie, gdy wszyscy moi klienci b\u0119d\u0105 ju\u017c bezpieczni."
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
