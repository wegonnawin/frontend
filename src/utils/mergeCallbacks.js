export default function mergeCallbacks(...fns) {
  return e => fns.forEach(f => f(e));
}