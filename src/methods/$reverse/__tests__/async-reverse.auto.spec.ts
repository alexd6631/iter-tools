/**
 * @generated-from ./async-reverse.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncReverse } from '../../..';
import { asyncUnwrap, asyncWrap } from '../../../test/async-helpers';

describe('asyncReverse', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncReverse(null))).toEqual([]);
      expect(await asyncUnwrap(asyncReverse(undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncReverse(asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields values in reverse order', async () => {
      expect(await asyncUnwrap(asyncReverse(asyncWrap([1, 2, 3])))).toEqual([3, 2, 1]);
    });
  });
});
