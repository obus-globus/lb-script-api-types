import type { LocalCache$HashIterator } from '../../../../com/google/common/cache/LocalCache$HashIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$KeyIterator extends LocalCache$HashIterator<Object> {
    constructor(null_: LocalCache$KeyIterator)
    next<K extends Object | number | string | boolean>(): K;
}