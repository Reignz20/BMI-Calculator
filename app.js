function calculateBMI(){
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    
    var result = document.getElementById("resultLabel");
    var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = "Your BMI is " + bmi;
}

calculateBMI();


function clearText(){
    weight.value = "";
    height.value = "";
}

clearText();