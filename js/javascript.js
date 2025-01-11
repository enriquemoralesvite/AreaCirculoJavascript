function calcularArea() {
    let radio = prompt('Ingrese el radio del círculo:');
    if (!isNaN(radio) && radio > 0) {
        let area = Math.PI * Math.pow(radio, 2);
        document.getElementById('result').innerHTML = `El área del círculo es: ${area.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = "Por favor, digite un número válido";
    }
}