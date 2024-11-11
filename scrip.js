function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("jsResult").innerHTML = "Silakan masukkan angka yang valid!";
        return;
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Operasi tidak dikenal";
    }

    document.getElementById("jsResult").innerHTML = "Hasil: " + result;
}
