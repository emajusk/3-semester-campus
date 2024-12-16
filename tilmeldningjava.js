//fået hjælp af chat gpt

/// Tilføjer en event listener til formularen med id "tilmeldForm"
document.getElementById('tilmeldForm').addEventListener('submit', function(event) {
    // Forhindrer standardopførsel (som normalt ville genindlæse siden ved formularindsendelse)
    event.preventDefault();

    // Henter værdier fra inputfelterne
    const navn = document.getElementById('navn').value;
    const mail = document.getElementById('mail').value;
    const mobil = document.getElementById('mobil').value;
    const skole = document.getElementById('skole').value;
    const andet = document.getElementById('andet').value;

    // Validering af input
    if (!navn) {
        alert('Mangler navn');
        return;
    }

    if (!mail) {
        alert('mangler mail');
        return;
    }

    if (!mobil) {
        alert('mangler mobil nummer');
        return;
    }

    if (!skole) {
        alert('mangler skole/uddannelse');
        return;
    }


    // Omdirigerer til en ny side med brugerens navn som en del af URL'en
    window.location.href = `bekræftelse.html?navn=${encodeURIComponent(navn)}`;
});
