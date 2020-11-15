/**
 * @generated-from ./$take-while.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncTakeWhile } from '../../..';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers';

describe('asyncTakeWhile', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncTakeWhile((value: any) => value, null))).toEqual([]);
      expect(await asyncUnwrap(asyncTakeWhile((value: any) => value, undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncTakeWhile((value: any) => value, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields values while the result of predicate(value, i) is truthy', async () => {
      expect(
        await asyncUnwrap(asyncTakeWhile(value => value === 2, asyncWrap([2, 2, 3, 2]))),
      ).toEqual([2, 2]);
      expect(await asyncUnwrap(asyncTakeWhile((_value, i) => i < 0, asyncWrap([2, 2])))).toEqual(
        [],
      );
    });
  });

  it('can take an async predicate', async () => {
    const iter = asyncTakeWhile(async value => value % 2 === 0, [2, 2, 3, 2, 2, 2]);
    expect(await asyncUnwrap(iter)).toEqual([2, 2]);
  });
});
