/**
 * @generated-from ./$last-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { lastOr } from '../../..';
import { wrap } from '../../../test/helpers';

describe('lastOr', () => {
  describe('when iterable is empty', () => {
    it('returns whenEmpty', () => {
      expect(lastOr(0, null)).toBe(0);
      expect(lastOr(0, undefined)).toBe(0);
      expect(lastOr(0, wrap([]))).toBe(0);
    });
  });

  describe('when iterable has values', () => {
    it('returns last value', () => {
      expect(lastOr(null, wrap([1, 2, 3]))).toBe(3);
    });
  });
});
