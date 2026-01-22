// Funciones matematicas adicionales para el laboratorio
// Incluye factorial y fibonacci como se pide en la seccion de actividades

/**
 * Calcula el factorial de un numero
 * @param {number} n - Numero entero no negativo
 * @returns {number} - El factorial de n
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('El factorial no esta definido para numeros negativos');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Calcula el n-esimo numero de la secuencia Fibonacci
 * @param {number} n - Posicion en la secuencia (empezando desde 0)
 * @returns {number} - El n-esimo numero de Fibonacci
 */
function fibonacci(n) {
    if (n < 0) {
        throw new Error('La posicion no puede ser negativa');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export { factorial, fibonacci };
