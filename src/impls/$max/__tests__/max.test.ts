/**
 * @generated-from ./$max.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { max } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

const youngest = {
  name: 'a',
  age: 10,
};
const middle = {
  name: 'b',
  age: 20,
};
const oldest = {
  name: 'c',
  age: 30,
};

const people = [youngest, middle, oldest];

describe('max', () => {
  describe('when source is empty', () => {
    it('should return undefined', () => {
      expect(max(null)).toEqual(undefined);
      expect(max(undefined)).toEqual(undefined);
      expect(max(wrap([]))).toEqual(undefined);
    });
  });

  describe('when source has a single value', () => {
    it('should return that value', () => {
      expect(max(wrap([1]))).toEqual(1);
      expect(max(wrap([1]))).toEqual(1);
    });
  });

  describe('when source has values', () => {
    it('should return the maximum value, according to comparator function', () => {
      expect(max(wrap([1, 3, 2]))).toEqual(3);
      expect(max((a, b) => b - a, wrap([1, 3, 2]))).toEqual(1);
      expect(max((a, b) => a.age - b.age, wrap(people))).toEqual(oldest);
      expect(max((a, b) => b.age - a.age, wrap(people))).toEqual(youngest);
    });
  });
});
