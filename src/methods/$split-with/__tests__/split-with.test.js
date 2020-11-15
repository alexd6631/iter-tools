/**
 * @generated-from ./$split-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { splitWith } from '../../..';
import { wrap, unwrapDeep } from '../../../test/helpers';

describe('splitWith', () => {
  it('should split between every item which is equal to the on argument', () => {
    expect(unwrapDeep(splitWith(i => i === null, wrap([1, null, 2, null, 3])))).toEqual([
      [1],
      [2],
      [3],
    ]);
  });

  it('should return no parts if source is empty', () => {
    expect(unwrapDeep(splitWith(i => i, null))).toEqual([]);
  });
});
