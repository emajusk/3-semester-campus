// Tilføjer en event listener til formularen med id "tilmeldForm", som aktiveres ved indsendelse
document.getElementById('tilmeldForm').addEventListener('submit', function(event) {
    // Forhindrer standardopførsel (som normalt ville genindlæse siden ved formularindsendelse)
    event.preventDefault();

    // Henter værdien fra inputfeltet til navn
    const navn = document.getElementById('navn').value;
    // Henter værdien fra inputfeltet til mail
    const mail = document.getElementById('mail').value;
    // Henter værdien fra inputfeltet til mobilnummer
    const mobil = document.getElementById('mobil').value;
    // Henter værdien fra inputfeltet til skole/uddannelse
    const skole = document.getElementById('skole').value;
    // Henter værdien fra inputfeltet til valgfri anden information
    const andet = document.getElementById('andet').value;

    // Tjekker, om alle obligatoriske felter (navn, mail, mobil og skole) er udfyldt
    if (navn && mail && mobil && skole) {
        // Omdirigerer til en ny side med brugerens navn som en del af URL'en
        window.location.href = `bekræftelse.html?navn=${encodeURIComponent(navn)}`;

    } else {
    // Hvis ikke alle obligatoriske felter er udfyldt, vises en fejlbesked
    alert('Udfyld venligst alle påkrævede felter.');
}
});
