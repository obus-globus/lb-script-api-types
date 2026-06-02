import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceLinkedOpenHashSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: ReferenceLinkedOpenHashSet$SetIterator)
    constructor(null_: ReferenceLinkedOpenHashSet$SetIterator)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    // private ensureIndexKnown(): void;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    nextIndex(): number;
    previous<K extends Object | number | string | boolean>(): K;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}