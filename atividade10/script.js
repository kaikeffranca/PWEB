function calc(){
    var peso = window.document.getElementById("peso").value;
    var altura = window.document.getElementById("altura").value/100;
    var imc = 0;

    imc = peso/Math.pow(altura, 2);

    if(imc < 18.5){
        alert("IMC: " + imc.toFixed(2) + "\nCLASSIFICAÇÃO: Magreza\nObesidade: 0");
    }else if(imc < 25){
        alert("IMC: " + imc.toFixed(2) + "\nCLASSIFICAÇÃO: Normal\nObesidade: 0");
    }else if(imc < 30){
        alert("IMC: " + imc.toFixed(2) + "\nCLASSIFICAÇÃO: Sobrepeso\nObesidade: 1");
    }else if(imc < 40){
        alert("IMC: " + imc.toFixed(2) + "\nCLASSIFICAÇÃO: Obesidade\nObesidade: 2");
    }else{
        alert("IMC: " + imc.toFixed(2) + "\nCLASSIFICAÇÃO: Obesidade Grave\nObesidade: 3");
    }

    
}