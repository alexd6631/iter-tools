import { $, $async, $await } from '../../../../generate/async.macro';

import { $takeSorted } from '../../..';
import { $wrap, $unwrap } from '../../../test/$helpers';

describe($`takeSorted`, () => {
  it(
    'yields a sorted iterable if no number is specified',
    $async(() => {
      const smallest3 = $takeSorted($wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest3))).toEqual([4, 6, 12, 44, 66, 77, 97, 98, 99]);
    }),
  );

  it(
    'yields n sorted items from the iterable',
    $async(() => {
      const smallest3 = $takeSorted(3, $wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest3))).toEqual([97, 98, 99]);
      const smallest1 = $takeSorted(1, $wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
      expect($await($unwrap(smallest1))).toEqual([99]);
    }),
  );

  it(
    'yields items from the iterable sorted with a comparator',
    $async(() => {
      const smallest2 = $takeSorted(2, (a, b) => a.length - b.length, [
        'abc',
        'a',
        'abcd',
        'abcd',
        'abcdef',
        'ab',
      ]);
      expect($await($unwrap(smallest2))).toEqual(['abcd', 'abcdef']);
    }),
  );
});
