btn = document.getElementById("btn")
circle = document.getElementById("circle")
box = document.getElementById("box")

btn.addEventListener('click',function(){
weight = parseFloat(document.getElementById("weight").value)
height = parseFloat(document.getElementById("height").value)
age = parseInt(document.getElementById("age").value)
gender = parseInt(document.getElementById("gender").value)
bmi=weight / (height **2)
bodyFat = (1.20 * bmi + 0.23 * age - 10.8 * gender - 5.4)
minw = 18.5 * height **2
maxw = 24.9 * height **2

if(!weight || !height || !age || isNaN(weight) || isNaN(height) || isNaN(age)){
    status = 'Error please enter a value';
    color = '#EC3545'; // Also Red
    advice = `You must enter values to get your BMI`;
    bmi="Not defined"
}
if (bmi < 18.5) {
    status = 'Underweight';
    color = '#FFA500'; // Orange
    advice = `You should gain at least <ins>${minw - weight}</ins> kg to reach a normal weight.`;
} else if (bmi >= 18.5 && bmi < 24.9) {
    status = 'Normal';
    color = '#28A745'; // Green
    advice = 'You have a healthy weight. Maintain your current lifestyle!';
} else if (bmi >= 25 && bmi < 29.9) {
    status = 'Overweight';
    color = '#FFC107'; // Yellow
    advice = `You should lose at least <ins>${weight - maxw}</ins> kg to reach a normal weight.`;
}else if(bmi >= 29.9){
    status = 'Obese';
    color = '#DC3545'; // Red     almost????
    advice = `You should lose at least <ins>${weight - maxw}</ins> kg to reach a normal weight.`;
} 

    circle.innerText = bmi;
    circle.style.borderColor = color;

    box.innerHTML = `
        <p><strong>Status:</strong> <strong style="color: ${color};">${status}</strong><br></p>
        <p>Estimated Body Fat Percentage: <p>${bodyFat}%</p><br></p>
        <p><strong>${advice}</strong></p>
    `;


})