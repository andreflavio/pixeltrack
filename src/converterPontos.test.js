const { converterPontos } = require('./converterPontos.js');

test('converte pontos positivos corretamente', () => {
  expect(converterPontos(100)).toBe(1000);
});

test('converte zero para zero', () => {
  expect(converterPontos(0)).toBe(0);
});

test('converte negativos para zero', () => {
  expect(converterPontos(-10)).toBe(0);
});