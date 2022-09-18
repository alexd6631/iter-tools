/**
 * @generated-from ./$max.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncMax<T>(iterable: AsyncWrappable<T>): Promise<T | undefined>;

declare function asyncMax<T>(
  compare: (a: T, b: T) => number,
): (iterable: AsyncWrappable<T>) => Promise<T | undefined>;

declare function asyncMax<T>(
  compare: (a: T, b: T) => number,
  iterable: AsyncWrappable<T>,
): Promise<T | undefined>;

export { asyncMax };