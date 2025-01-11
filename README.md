# Calculadora de Área de Círculo

## Descripción
Una simple aplicación web que calcula el área de un círculo basado en el radio proporcionado por el usuario. La aplicación está construida con HTML, CSS y JavaScript puro.

## Características
- Interfaz de usuario simple e intuitiva
- Validación de entrada para asegurar números positivos
- Resultado mostrado con 2 decimales
- Diseño responsive

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript

## Cómo usar
1. Clona este repositorio o descarga los archivos
2. Abre el archivo `index.html` en tu navegador web
3. Haz clic en el botón "Calcular Área"
4. Ingresa el radio del círculo cuando se te solicite
5. El resultado se mostrará en la pantalla

## Código de ejemplo
```javascript
function calcularArea() {
    let radio = prompt('Ingrese el radio del círculo:');
    if (!isNaN(radio) && radio > 0) {
        let area = Math.PI * Math.pow(radio, 2);
        document.getElementById('result').innerHTML = 
            `El área del círculo es: ${area.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 
            "Por favor, digite un número válido";
    }
}
