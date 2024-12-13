document.getElementById('tilmeldForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stopper standardformularens handling

    const navn = document.getElementById('navn').value;
    const mail = document.getElementById('mail').value;
    const mobil = document.getElementById('mobil').value;
    const skole = document.getElementById('skole').value;
    const andet = document.getElementById('andet').value;

    // Simpel validering
    if (navn && mail && mobil && skole) {
        // Tilpas besked
        alert(`Tak for din tilmelding, ${navn}! Du bliver nu sendt videre.`);

        // Omdirigering til en anden side
        window.location.href = "ledigejobs.html";
    } else {
        alert('Udfyld venligst alle påkrævede felter.');
    }
});