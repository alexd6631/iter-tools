/**
 * @generated-from ./$regexp-split-iter.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { regexpSplit } from '../regexp-split/regexp-split';
export function* regexpSplitIter(re, iterable) {
  let buffer = '';
  let queue;
  let mergeEmpty = false;

  for (const chunk of iterable) {
    if (chunk === '') continue;
    queue = [];
    buffer += chunk;

    for (const strIter of regexpSplit(re, buffer)) {
      if (mergeEmpty && strIter === '') {
        mergeEmpty = false;
        continue;
      }

      mergeEmpty = false;
      queue.push(strIter);

      if (queue.length === 2) {
        yield queue.shift();
      }
    }

    mergeEmpty = queue[queue.length - 1] === '';
    buffer = queue.join('');
  }

  if (queue && queue.length) {
    yield* queue;
  }
}
export default iterableCurry(regexpSplitIter);