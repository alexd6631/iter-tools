/**
 * @generated-from ./$leading-window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncLeadingWindow } from '../../..';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers';

describe('asyncLeadingWindow', () => {
  describe('when source is empty', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncLeadingWindow(3, { filler: 0 }, null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncLeadingWindow(3, { filler: 0 }, undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncLeadingWindow(3, { filler: 0 }, asyncWrap([])))).toEqual(
        [],
      );
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncLeadingWindow(3, { filler: 0 }, asyncWrap([1, 2]))),
      ).toEqual([[1, 2, 0], [2, 0, 0]]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields one full window, then partial windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncLeadingWindow(3, { filler: 0 }, asyncWrap([1, 2, 3]))),
      ).toEqual([[1, 2, 3], [2, 3, 0], [3, 0, 0]]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields size(source)-size full windows, then partial windows', async () => {
      const result = [[1, 2], [2, 3], [3, 0]];

      expect(
        await asyncUnwrapDeep(asyncLeadingWindow(2, { filler: 0 }, asyncWrap([1, 2, 3]))),
      ).toEqual(result);
      // prettier-ignore
      // @ts-ignore
      expect((await asyncUnwrapDeep(asyncLeadingWindow({ size: 2, filler: 0 }, asyncWrap([1, 2, 3]))))).toEqual(result);
    });
  });

  describe('when useFiller is false', () => {
    it('yields shorter windows instead of windows with filler', async () => {
      expect(
        await asyncUnwrapDeep(asyncLeadingWindow(3, { useFiller: false }, asyncWrap([1, 2, 3]))),
      ).toEqual([[1, 2, 3], [2, 3], [3]]);
    });
  });

  it('has a default filler of undefined', async () => {
    expect(await asyncUnwrapDeep(asyncLeadingWindow(2, asyncWrap([1])))).toEqual([[1, undefined]]);
  });
});
