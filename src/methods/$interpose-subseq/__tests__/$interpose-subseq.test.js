import { $, $isSync, $async, $await } from '../../../../generate/async.macro';

import { $interposeSubseq } from '../../..';
import { $wrap, $unwrap } from '../../../test/$helpers';

describe($`interposeSubseq`, () => {
  describe('when source is empty', () => {
    it(
      'yields no values',
      $async(() => {
        expect($await($unwrap($interposeSubseq('', null)))).toEqual([]);
        expect($await($unwrap($interposeSubseq('', undefined)))).toEqual([]);
        expect($await($unwrap($interposeSubseq('', $wrap([]))))).toEqual([]);
      }),
    );
  });

  describe('when source contains a single value', () => {
    it(
      'yields that value',
      $async(() => {
        const iter = $interposeSubseq($wrap([null, null]), $wrap([1]));
        expect($await($unwrap(iter))).toEqual([1]);
      }),
    );
  });

  describe('when source contains multiple values', () => {
    it(
      'yields interposeSubseqd value between each value from source',
      $async(() => {
        const iter = $interposeSubseq($wrap([null, null]), $wrap([1, 2, 3]));
        expect($await($unwrap(iter))).toEqual([1, null, null, 2, null, null, 3]);
      }),
    );
  });

  if ($isSync) {
    describe('when source is a string', () => {
      it(
        'warns',
        $async(() => {
          $interposeSubseq($wrap([null, null]), 'abc');
          expect(console.warn).callsMatchSnapshot();
        }),
      );
    });
  }
});
