import { $, $async, $await } from '../../../../generate/async.macro.cjs';

import { $takeSorted } from 'iter-tools-es';
import { $wrap, $unwrap } from '../../../test/$helpers.js';

describe($`takeSorted`, () => {
  it(
    'yields a sorted iterable if no number is specified',
    $async(() => {
      const smallest3 = $takeSorted($wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest3))).toEqual([4, 6, 12, 44, 66, 77, 97, 98, 99]);
    }),
  );

  it(
    'yields n sorted values from the iterable',
    $async(() => {
      const smallest3 = $takeSorted(3, $wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest3))).toEqual([97, 98, 99]);
      const smallest1 = $takeSorted(1, $wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest1))).toEqual([99]);
    }),
  );

  it(
    'yields values from the iterable sorted with a comparator',
    $async(() => {
      expect($await($unwrap($takeSorted((a, b) => a - b, $wrap([2, 1, 3]))))).toEqual([1, 2, 3]);
      expect($await($unwrap($takeSorted((a, b) => b - a, $wrap([2, 1, 3]))))).toEqual([3, 2, 1]);
      expect($await($unwrap($takeSorted(2, (a, b) => a - b, $wrap([2, 1, 3]))))).toEqual([2, 3]);
      expect($await($unwrap($takeSorted(2, (a, b) => b - a, $wrap([2, 1, 3]))))).toEqual([2, 1]);
    }),
  );
});
