/**
 * @generated-from ./includes.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { includes } from '../../..';
import { wrap } from '../../../test/helpers';

describe('includes', () => {
  describe('when iterable includes value', () => {
    it('returns true', () => {
      expect(includes(1, wrap([1, 2, 3]))).toBe(true);
      expect(includes(2, wrap([1, 2, 3]))).toBe(true);
      expect(includes(3, wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable does not include value', () => {
    it('returns false', () => {
      expect(includes(4, wrap([1, 2, 3]))).toBe(false);
      expect(includes(null, wrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    it('returns false', () => {
      expect(includes(undefined, wrap([]))).toBe(false);
    });
  });

  describe('when iterable is a string', () => {
    it('warns', () => {
      includes([], 'abc');
      expect(console.warn).callsMatchSnapshot();
    });
  });
});
