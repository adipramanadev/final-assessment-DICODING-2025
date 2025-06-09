import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

// Test: Dua bilangan positif
test('Menjumlahkan dua bilangan positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Test: Salah satu parameter bukan number
test('Parameter pertama bukan number', () => {
  assert.strictEqual(sum('2', 3), 0);
});

test('Parameter kedua bukan number', () => {
  assert.strictEqual(sum(2, '3'), 0);
});

test('Kedua parameter bukan number', () => {
  assert.strictEqual(sum('2', '3'), 0);
});

// Test: Salah satu parameter negatif
test('Parameter pertama negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test('Parameter kedua negatif', () => {
  assert.strictEqual(sum(5, -1), 0);
});

test('Kedua parameter negatif', () => {
  assert.strictEqual(sum(-5, -1), 0);
});

// Test: Kedua parameter nol
test('Menjumlahkan nol dan nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test: Satu parameter nol
test('Satu parameter nol', () => {
  assert.strictEqual(sum(0, 7), 7);
  assert.strictEqual(sum(7, 0), 7);
});
