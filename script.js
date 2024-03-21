var age = document.getElementById("age_value");
var height = document.getElementById("height_value");
var weight = document.getElementById("weight_value");
var male = document.getElementById("male_input");
var female = document.getElementById("female_input");
var resultArea = document.getElementById("comment");

function calculate(){

    if(age.value=="" || height.value=="" || weight.value==""){
        alert("All fields are required");
    }

    else{
        countValue();
    }

}

function countValue(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1]/100*Number(p[1])/100));

    var result=" ";

    if(bmi<18.5){
        result="Underweight";
    }
    else if(18.5<bmi&&bmi<=24.9){
        result="Healthy";
    }
    else if(24.9<bmi&&bmi<=29.9){
        result="Overweight";
    }
    else if(29.9<bmi&&bmi<34.9){
        result="Obese";
    }
    else if(35<=bmi){
        result="Extremely obese";
    }
    
    console.log(bmi)


    resultArea.style.display = "block";
    document.querySelector("#comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result_value").innerHTML = bmi.toFixed(2);
}