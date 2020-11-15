/**
 * @generated-from ./$wrap.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { wrap } from '../../..';
import { wrap as testWrap, unwrap } from '../../../test/helpers';

describe('wrap', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(wrap(undefined))).toEqual([]);
      expect(unwrap(wrap(null))).toEqual([]);
      expect(unwrap(wrap(testWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields the values from source', () => {
      expect(unwrap(wrap([1, 2, 3]))).toEqual([1, 2, 3]);
      expect(unwrap(wrap(testWrap([1, 2, 3])))).toEqual([1, 2, 3]);
    });
  });

  it('can be consumed multiple times if its input can', () => {
    const wrapped = wrap([1, 2, 3]);
    expect(unwrap(wrapped)).toEqual([1, 2, 3]);
    expect(unwrap(wrapped)).toEqual([1, 2, 3]);
  });
});
