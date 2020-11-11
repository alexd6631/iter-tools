/**
 * @generated-from ./async-starts-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncStartsWith, range } from '../../..';

describe.skip('asyncStartsWith', () => {
  it('returns true if the iterable starts with the given value', async () => {
    expect(await asyncStartsWith(1, range(1, 10))).toBe(true);
  });

  it('returns false if the iterable contains but does not start with the given value', async () => {
    expect(await asyncStartsWith(1, range(0, 10))).toBe(false);
  });

  it('returns true if the iterable contains only the given value', async () => {
    expect(await asyncStartsWith(1, [1])).toBe(true);
  });

  it('returns false if the iterable is empty', async () => {
    expect(await asyncStartsWith(undefined, [])).toBe(false);
  });
});
