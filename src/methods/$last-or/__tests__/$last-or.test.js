import { $, $async, $await } from '../../../../generate/async.macro';

import { $lastOr } from '../../..';
import { $wrap } from '../../../test/$helpers';

describe($`lastOr`, () => {
  describe('when iterable is empty', () => {
    it(
      'returns whenEmpty',
      $async(() => {
        expect($await($lastOr(0, null))).toBe(0);
        expect($await($lastOr(0, undefined))).toBe(0);
        expect($await($lastOr(0, $wrap([])))).toBe(0);
      }),
    );
  });

  describe('when iterable has values', () => {
    it(
      'returns last value',
      $async(() => {
        expect($await($lastOr(null, $wrap([1, 2, 3])))).toBe(3);
      }),
    );
  });
});
