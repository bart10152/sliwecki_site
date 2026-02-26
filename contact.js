// Numer telefonu zakodowany w Base64 (+48 508 473 105)
const secret = "KzQ4IDUwOCA0NzMgMTA1"; 

document.addEventListener("DOMContentLoaded", function() {
    const revealBtn = document.getElementById("revealBtn");
    const output = document.getElementById("phoneOutput");

    if (revealBtn && output) {
        revealBtn.addEventListener("click", function() {
            // Dekodowanie numeru w momencie kliknięcia
            const fullNumber = atob(secret);
            const telLink = fullNumber.replace(/\s/g, ""); // Usuwa spacje do linku tel:

            revealBtn.style.display = "none";
            output.innerHTML = `<a href="tel:${telLink}">${fullNumber}</a>`;

            setTimeout(() => {
                output.classList.add('visible');
            }, 50);
        });
    }
});
