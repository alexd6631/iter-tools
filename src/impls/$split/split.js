/**
 * @generated-from ./$split.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { map } from '../$map/map.js';

function* iterableOf(item) {
  yield item;
}

export function split(source) {
  return map(source, (item) => iterableOf(item));
}

export default split;