<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
</head>
<body>
    <h1>BMI Calculator</h1>
    <label for="weight">Weight (kg): </label>
    <input type="number" id="weight"><br><br>
    
    <label for="height">Height (cm): </label>
    <input type="number" id="height"><br><br>
    
    <button onclick="displayBMI()">Calculate BMI</button><br><br>
    
    <div id="result"></div>
    
    <script src="script.js"></script>
</body>
</html>