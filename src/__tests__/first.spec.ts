/**
 * @generated-from ./first.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { first, range } from '..';
describe('first', () => {
  describe('when iterable contains items', () => {
    it('returns first item', () => {
      const iter = range(10);
      expect(first(iter)).toBe(0);
    });
  });
  describe('when iterable is empty', () => {
    it('returns undefined', () => {
      const iter = range(0);
      expect(first(iter)).toBe(undefined);
    });
  });
});
