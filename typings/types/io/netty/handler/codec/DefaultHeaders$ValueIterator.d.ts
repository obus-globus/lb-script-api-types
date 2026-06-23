import type { DefaultHeaders$HeaderEntry } from '../../../../io/netty/handler/codec/DefaultHeaders$HeaderEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class DefaultHeaders$ValueIterator extends Object implements Iterator<V> {
    constructor(null_: DefaultHeaders$ValueIterator)
    // private hash: number;
    // private name: K;
    // private next: DefaultHeaders$HeaderEntry<K, V>;
    // private previous: DefaultHeaders$HeaderEntry<K, V>;
    // private removalPrevious: DefaultHeaders$HeaderEntry<K, V>;
    // private calculateNext<K extends unknown, V extends unknown>(arg0: DefaultHeaders$HeaderEntry<K, V>): void;
    forEachRemaining<V extends unknown>(arg0: (param0: V) => void): void;
    hasNext(): boolean;
    next<V extends unknown>(): V;
    remove(): void;
}