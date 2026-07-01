import type { LocalCache$HashIterator } from '../../../../com/google/common/cache/LocalCache$HashIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$ValueIterator extends LocalCache$HashIterator<Object> {
    constructor(null_: Map<Object, Object>)
    next<V extends unknown>(): V;
}