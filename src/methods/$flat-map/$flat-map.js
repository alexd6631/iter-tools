import { $async, $await } from '../../../generate/async.macro';

import { $iterableCurry } from '../../internal/$iterable';
import { $map } from '../$map/$map';

$async;
export function* $flatMap(func, iterable) {
  $await;
  for (const item of $map(func, iterable)) {
    yield* item;
  }
}

export default $iterableCurry($flatMap);