import type { ConcurrentSkipListIntObjMultimap$IntEntry } from '../../../../io/netty/util/concurrent/ConcurrentSkipListIntObjMultimap$IntEntry.d.ts'
import type { ConcurrentSkipListIntObjMultimap$Node } from '../../../../io/netty/util/concurrent/ConcurrentSkipListIntObjMultimap$Node.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class ConcurrentSkipListIntObjMultimap$Iter<T extends unknown> extends Object implements Iterator<T> {
    constructor(null_: ConcurrentSkipListIntObjMultimap$IntEntry<V>[])
    // private lastReturned: ConcurrentSkipListIntObjMultimap$Node<V>;
    // private next: ConcurrentSkipListIntObjMultimap$Node<V>;
    // private nextValue: V;
    advance<V extends unknown>(arg0: ConcurrentSkipListIntObjMultimap$Node<V>): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    remove(): void;
}