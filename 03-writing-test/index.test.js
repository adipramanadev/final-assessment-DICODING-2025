import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Menjumlahkan angka negatif dan positif', () => {
  assert.strictEqual(sum(-2, 5), 3);
});

test('Menjumlahkan dua angka negatif', () => {
  assert.strictEqual(sum(-4, -6), -10);
});

test('Menjumlahkan dengan nol', () => {
  assert.strictEqual(sum(0, 7), 7);
});

test('Menjumlahkan dua nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});
