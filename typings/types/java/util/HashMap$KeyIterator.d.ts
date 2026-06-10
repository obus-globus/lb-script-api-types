import type { HashMap$HashIterator } from '../../java/util/HashMap$HashIterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class HashMap$KeyIterator extends HashMap$HashIterator implements Iterator<K> {
    constructor(null_: HashMap$KeyIterator)
    forEachRemaining<K extends Object | number | string | boolean>(arg0: (param0: K) => void): void;
    next<K extends Object | number | string | boolean>(): K;
}