/**
 * @generated-from ./$join-with-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import internalJoinWith from '../$join-with_/join-with';
const config = {
  subseq: true,
};
export function joinWithSubseq(iterable, with_) {
  return internalJoinWith(iterable, config, with_);
}
export default iterableCurry(joinWithSubseq);