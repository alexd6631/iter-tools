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
    let bestValue = peekr.value;
    let bestMappedValue = mapper(bestValue);

    peekr.advance();
    while (!peekr.done) {
      const candidate = peekr.value;
      const candidateMappedValue = mapper(candidate);
      if (compare(bestMappedValue, candidateMappedValue) < 0) {
        bestValue = candidate;
        bestMappedValue = candidateMappedValue;
      }
      peekr.advance();
    }
    return bestValue;
  }
}

export const maxBy = iterableCurry(__maxBy, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
  growRight: true,
});
