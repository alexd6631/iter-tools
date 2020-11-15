import { $Promise } from '../../../generate/async.macro';

import { $SourceIterable } from '../../types/$iterable';

declare function $toObject<V>(
  iterable: $SourceIterable<[string, V]>,
  proto?: any,
): $Promise<{ [key: string]: V }>;

export default $toObject;
