/**
 * @generated-from ./join-with-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { joinWithSubseq } from '../../..';
import { wrapDeep, unwrap } from '../../../test/helpers';

describe('joinWithSubseq', () => {
  describe('joining on the empty subseq', () => {
    it('should include the items from every group', () => {
      expect(unwrap(joinWithSubseq([], wrapDeep([[1], [2], [3]])))).toEqual([1, 2, 3]);
    });

    it('should contain no output for an empty group', () => {
      expect(unwrap(joinWithSubseq([], wrapDeep([[1], [], [3]])))).toEqual([1, 3]);
    });
  });

  it('should yield a single separator when joining two empty groups', () => {
    expect(unwrap(joinWithSubseq([1, 2], wrapDeep([[], []])))).toEqual([1, 2]);
  });

  it('passes through the empty iterable', () => {
    expect(unwrap(joinWithSubseq([], null))).toEqual([]);
    expect(unwrap(joinWithSubseq([], undefined))).toEqual([]);
    expect(unwrap(joinWithSubseq([], wrapDeep([])))).toEqual([]);
  });
});
