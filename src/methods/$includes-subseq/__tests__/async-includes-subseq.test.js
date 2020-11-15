/**
 * @generated-from ./$includes-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncIncludesSubseq } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncIncludesSubseq', () => {
  describe('when iterable includes a given sequence', () => {
    it('returns true', async () => {
      expect(await asyncIncludesSubseq(asyncWrap([1, 2]), asyncWrap([1, 2, 3]))).toBe(true);
      expect(await asyncIncludesSubseq(asyncWrap([3]), asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is equal to a given sequence', () => {
    it('returns true', async () => {
      expect(await asyncIncludesSubseq(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is shorter than a matching sequence', () => {
    it('returns false', async () => {
      expect(await asyncIncludesSubseq(asyncWrap([1, 2, 3]), asyncWrap([1, 2]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    describe('and sequence is empty', () => {
      it('returns true', async () => {
        expect(await asyncIncludesSubseq(asyncWrap([]), asyncWrap([]))).toBe(true);
      });
    });

    describe('and sequence is not empty', () => {
      it('returns false', async () => {
        expect(await asyncIncludesSubseq(asyncWrap([undefined]), asyncWrap([]))).toBe(false);
      });
    });
  });
});
