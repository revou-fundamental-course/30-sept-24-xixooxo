function konversiButton() {
    const inputCelcius = document.getElementById('inputCel').value;
    const celsius = parseFloat(inputCelcius);

    if (isNaN(celsius)) {
        alert("Masukkan nilai Celciusnya dulu ya guys :)!");
        return;
    }

    const fahrenheit = (celsius * 1.8) + 32;
    document.getElementById('inputFah').value = fahrenheit.toFixed(2);

    const kalkulasi = `${celsius} °C × 1.8 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKalkulasi').value = kalkulasi;
}

function resetButton() {
    document.getElementById('inputCel').value = '';
    document.getElementById('inputFah').value = '';
    document.getElementById('resultKalkulasi').value = '';
}

function reverseButton() {
    const inputFahrenheit = document.getElementById('inputFah').value;
    const fahrenheit = parseFloat(inputFahrenheit);

    if (isNaN(fahrenheit)) {
        alert("Masukkan nilai Fahrenheitnya dulu ya guys :)!");
        return;
    }

    const celsius = (fahrenheit - 32) / 1.8;
    document.getElementById('inputCel').value = celsius.toFixed(2);

    const kalkulasi = `${fahrenheit} °F - 32 / 1.8 = ${celsius.toFixed(2)} °C`;
    document.getElementById('resultKalkulasi').value = kalkulasi;
}