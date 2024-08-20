document.getElementById('generateBtn').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    
    if (isNaN(minValue) || isNaN(maxValue)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    } else if (minValue >= maxValue) {
        document.getElementById('result').textContent = "Minimum value must be less than the maximum value.";
    } else {
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        document.getElementById('result').textContent = `Generated Random Number: ${randomNum}`;
    }
});
