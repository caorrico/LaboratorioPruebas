// Pruebas unitarias para la funcion sum
// Usando Jest como framework de testing

import sum from './sum.js';

// Test para verificar que la suma funciona correctamente
describe('Funcion sum', () => {
    test('suma 1 + 2 debe ser igual a 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('suma de numeros negativos -1 + -1 debe ser -2', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test('suma de cero 0 + 0 debe ser 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test('suma de numeros decimales 0.1 + 0.2 debe ser cercano a 0.3', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});
