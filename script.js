function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
  
    if (isNaN(altura) || isNaN(peso)) {
      document.getElementById("resultado").innerHTML = "Preencha os campos corretamente.";
      return;
    }
  
    var imc = peso / ((altura/100) ** 2);
    imc = imc.toFixed(2);
  
    var resultado = "Seu IMC é " + imc + ". ";
  
    if (imc < 18.5) {
      resultado += "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado += "Seu peso está normal.";
    } else if (imc >= 25 && imc <= 29.9) {
      resultado += "Você está com sobrepeso.";
    } else if (imc >= 30 && imc <= 34.9) {
      resultado += "Você está com obesidade grau I.";
    } else if (imc >= 35 && imc <= 39.9) {
      resultado += "Você está com obesidade grau II.";
    } else {
      resultado += "Você está com obesidade grau III.";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  