/**
 * @generated-from ./$find.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { AsyncIterable, AsyncPromise } from '../internal/async-iterable';
import { asyncFind } from '..';
declare var Ø: never;
assert<AsyncPromise<number | undefined>>(
  asyncFind(Ø as (item: number) => any, Ø as AsyncIterable<number>),
);
assert<AsyncPromise<number | 0>>(
  asyncFind(Ø as 0, Ø as (item: number) => any, Ø as AsyncIterable<number>),
);
assert<AsyncPromise<2 | undefined>>(
  asyncFind(Ø as (item: number) => item is 2, Ø as AsyncIterable<number>),
);
assert<AsyncPromise<2 | 0>>(
  asyncFind(Ø as 0, Ø as (item: number) => item is 2, Ø as AsyncIterable<number>),
);
