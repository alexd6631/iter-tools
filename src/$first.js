import $firstOr from './$first-or';

function $first(iterable) {
  return $firstOr(undefined, iterable);
}

export default $first;
