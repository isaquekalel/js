function calcularImc() {
    
    var nome = document.getElementById("nome").value
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
}
if (isNaN(peso)|| isNaN(altura)) {
    alert("Por favor, insira valores númericos para peso e altura.");
    return;

}

IMC = peso / (altura * altura)
  
if (imc < 18,5) {
    classificação = "Magreza";
}
if (imc <18,5 a 24,9 ) {
    classificação = "Peso normal"
}
if (imc <25 a 29,9 ) {
    classificação = "Sobrepeso" 
}
if (imc <30 a 34,9 ) {
    classificação = "Obesidade grau I" 
}
if (imc <35 a 39,9) {
    classificação = "Obesidade grau II"
}
if (imc ≥ 40 ) {
    classificação = "Obesidade grau III"}  
