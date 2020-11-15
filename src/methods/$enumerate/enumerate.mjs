/**
 * @generated-from ./$enumerate.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { map } from '../$map/map';

export function enumerate(source, start = 0) {
  return map(source, (value, i) => [start + i, value]);
}

export default iterableCurry(enumerate, {
  minArgs: 0,
  maxArgs: 1,
});
