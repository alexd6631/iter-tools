/**
 * @generated-from ./includes-any-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { includesAnySubseq, range } from '../../..';
describe('includesAnySubseq', () => {
  it('returns true if the iterable contains any of the given subsequences', () => {
    expect(includesAnySubseq([[0, 1], [1, 2]], range(0, 10))).toBe(true);
  });
  it('returns true if the iterable equals any of the given subsequences', () => {
    expect(includesAnySubseq([range(0, 2), range(1, 3)], range(1, 3))).toBe(true);
  });
  it('returns true if no subsequences are given', () => {
    expect(includesAnySubseq([], range(1, 3))).toBe(true);
  });
  it('returns false if the given subsequences are longer than the iterable', () => {
    expect(includesAnySubseq([range(0, 3), range(1, 4)], range(1, 3))).toBe(false);
  });
  describe('when the iterable is empty', () => {
    it('returns true if any subsequence is empty', () => {
      expect(includesAnySubseq([[], [null]], [])).toBe(true);
    });
    it('returns false if all subsequences are not empty', () => {
      expect(includesAnySubseq([[undefined]], [])).toBe(false);
    });
  });
});