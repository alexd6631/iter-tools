/**
 * @generated-from ./$max-by.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { __peekerate } from '../$peekerate/peekerate.js';
import { defaultCompareOrder } from '../../internal/compare.js';

export function __maxBy(iterable, mapper, compare = defaultCompareOrder) {
  const peekr = __peekerate(iterable);

  if (!peekr.done) {
    let maxValue = peekr.value;
    let maxMappedValue = mapper(maxValue);

    peekr.advance();
    while (!peekr.done) {
      const value = peekr.value;
      const mappedValue = mapper(value);
      if (compare(maxMappedValue, mappedValue) < 0) {
        maxValue = value;
        maxMappedValue = mappedValue;
      }
      peekr.advance();
    }
    return maxValue;
  }
}

export const maxBy = iterableCurry(__maxBy, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
  growRight: true,
});