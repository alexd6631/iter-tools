/**
 * @generated-from ./$max.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncMax } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

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

describe('asyncMax', () => {
  describe('when source is empty', () => {
    it('should return undefined', async () => {
      expect(await asyncMax(null)).toEqual(undefined);
      expect(await asyncMax(undefined)).toEqual(undefined);
      expect(await asyncMax(asyncWrap([]))).toEqual(undefined);
    });
  });

  describe('when source has a single value', () => {
    it('should return that value', async () => {
      expect(await asyncMax(asyncWrap([1]))).toEqual(1);
      expect(await asyncMax(asyncWrap([1]))).toEqual(1);
    });
  });

  describe('when source has values', () => {
    it('should return the maximum value, according to comparator function', async () => {
      expect(await asyncMax(asyncWrap([1, 3, 2]))).toEqual(3);
      expect(await asyncMax((a, b) => b - a, asyncWrap([1, 3, 2]))).toEqual(1);
      expect(await asyncMax((a, b) => a.age - b.age, asyncWrap(people))).toEqual(oldest);
      expect(await asyncMax((a, b) => b.age - a.age, asyncWrap(people))).toEqual(youngest);
    });
  });
});
