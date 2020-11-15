/**
 * @generated-from ./$interpose-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncInterposeSubseq } from '../../..';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers';

describe('asyncInterposeSubseq', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncInterposeSubseq('', null))).toEqual([]);
      expect(await asyncUnwrap(asyncInterposeSubseq('', undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncInterposeSubseq('', asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source contains a single value', () => {
    it('yields that value', async () => {
      const iter = asyncInterposeSubseq(asyncWrap([null, null]), asyncWrap([1]));
      expect(await asyncUnwrap(iter)).toEqual([1]);
    });
  });

  describe('when source contains multiple values', () => {
    it('yields interposeSubseqd value between each value from source', async () => {
      const iter = asyncInterposeSubseq(asyncWrap([null, null]), asyncWrap([1, 2, 3]));
      expect(await asyncUnwrap(iter)).toEqual([1, null, null, 2, null, null, 3]);
    });
  });
});
