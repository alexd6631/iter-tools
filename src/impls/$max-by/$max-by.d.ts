import { $Promise, $MaybePromise } from '../../../generate/async.macro.cjs';

import { $Wrappable } from '../../types/$iterable';

declare function $maxBy<T, K>(
  mapper: (item: T) => $MaybePromise<K>,
): (iterable: $Wrappable<T>) => $Promise<T | undefined>;

declare function $maxBy<T, K>(
  mapper: (item: T) => $MaybePromise<K>,
  iterable: $Wrappable<T>,
): $Promise<T | undefined>;

declare function $maxBy<T, K>(
  mapper: (item: T) => $MaybePromise<K>,
  compare: (a: K, b: K) => number,
): (iterable: $Wrappable<T>) => $Promise<T | undefined>;

declare function $maxBy<T, K>(
  mapper: (item: T) => $MaybePromise<K>,
  compare: (a: K, b: K) => number,
  iterable: $Wrappable<T>,
): $Promise<T | undefined>;

export { $maxBy };
