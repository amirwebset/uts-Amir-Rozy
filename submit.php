<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $operation = $_POST["operation"];
    $result = 0;

    switch ($operation) {
        case "add":
            $result = $num1 + $num2;
            break;
        case "subtract":
            $result = $num1 - $num2;
            break;
        case "multiply":
            $result = $num1 * $num2;
            break;
        case "divide":
            $result = $num2 != 0 ? $num1 / $num2 : "Tidak dapat membagi dengan nol";
            break;
        default:
            $result = "Operasi tidak dikenal";
    }

    header("Location: index.html?result=" . urlencode($result));
    exit();
}
?>
