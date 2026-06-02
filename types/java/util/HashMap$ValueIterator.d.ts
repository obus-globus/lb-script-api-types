import type { HashMap$HashIterator } from '../../java/util/HashMap$HashIterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class HashMap$ValueIterator extends HashMap$HashIterator implements Iterator<V> {
    constructor(null_: HashMap$ValueIterator)
    forEachRemaining(arg0: (param0: T) => void): void;
    next<V extends Object | number | string | boolean>(): V;
}