/**
 * @generated-from ./$min-by.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncMinBy } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

type Person = { name: string; age: number };
const personAge = (p: Person) => p.age;
const ascendingOrder = (a: number, b: number) => a - b;
const descendingOrder = (a: number, b: number) => b - a;

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

describe('asyncMinBy', () => {
  describe('when source is empty', () => {
    it('should return undefined', async () => {
      expect(await asyncMinBy(personAge, null)).toEqual(undefined);
      expect(await asyncMinBy(personAge, ascendingOrder, null)).toEqual(undefined);
      expect(await asyncMinBy(personAge, ascendingOrder, undefined)).toEqual(undefined);
      expect(await asyncMinBy(personAge, ascendingOrder, asyncWrap([]))).toEqual(undefined);
    });
  });

  describe('when source has a single value', () => {
    it('should return that value', async () => {
      expect(await asyncMinBy((i) => i, asyncWrap([1]))).toEqual(1);
      expect(await asyncMinBy((i) => i, ascendingOrder, asyncWrap([1]))).toEqual(1);
      expect(await asyncMinBy((i) => i, descendingOrder, asyncWrap([1]))).toEqual(1);
    });
  });

  describe('when source has values', () => {
    it('should return the minimum value according mapper and selector function', async () => {
      expect(await asyncMinBy(personAge, asyncWrap(people))).toEqual(youngest);
      expect(await asyncMinBy(personAge, ascendingOrder, asyncWrap(people))).toEqual(youngest);
      expect(await asyncMinBy(personAge, descendingOrder, asyncWrap(people))).toEqual(oldest);
    });

    it('may take an async mapper function', async () => {
      expect(await asyncMinBy(async (p) => p.age, asyncWrap(people))).toEqual(youngest);
      expect(await asyncMinBy(async (p) => p.age, descendingOrder, asyncWrap(people))).toEqual(
        oldest,
      );
    });
  });
});