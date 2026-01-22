// Pruebas unitarias para las funciones matematicas
// Usando Jest como framework de testing

import { factorial, fibonacci } from './math.js';

// Tests para la funcion factorial
describe('Funcion factorial', () => {
    test('factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 debe ser 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial de 10 debe ser 3628800', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('factorial de numero negativo debe lanzar error', () => {
        expect(() => factorial(-1)).toThrow('El factorial no esta definido para numeros negativos');
    });
});

// Tests para la funcion fibonacci
describe('Funcion fibonacci', () => {
    test('fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 1 debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci de 6 debe ser 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('fibonacci de 10 debe ser 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('fibonacci de numero negativo debe lanzar error', () => {
        expect(() => fibonacci(-1)).toThrow('La posicion no puede ser negativa');
    });
});
