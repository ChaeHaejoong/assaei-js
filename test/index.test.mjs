import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assaei } from '../dist/index.js';

test('returns true for true', () => {
  assert.equal(assaei(true), true);
});

test('returns false for false', () => {
  assert.equal(assaei(false), false);
});

test('returns true for equal numbers', () => {
  assert.equal(assaei(1 === 1), true);
});

test('returns false for unequal numbers', () => {
  assert.equal(assaei(1 === 0), false);
});

test('returns true for a satisfied greater-than comparison', () => {
  assert.equal(assaei(2 > 1), true);
});

test('returns false for an unsatisfied greater-than comparison', () => {
  assert.equal(assaei(1 > 2), false);
});

test('returns true when both parts of an AND condition are true', () => {
  assert.equal(assaei(true && true), true);
});

test('returns false when one part of an AND condition is false', () => {
  assert.equal(assaei(true && false), false);
});

test('returns true when one part of an OR condition is true', () => {
  assert.equal(assaei(false || true), true);
});

test('returns false when both parts of an OR condition are false', () => {
  assert.equal(assaei(false || false), false);
});
