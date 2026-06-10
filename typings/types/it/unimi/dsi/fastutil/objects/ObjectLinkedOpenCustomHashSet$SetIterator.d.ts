import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectLinkedOpenCustomHashSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: ObjectLinkedOpenCustomHashSet$SetIterator)
    constructor(null_: ObjectLinkedOpenCustomHashSet$SetIterator)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    // private ensureIndexKnown(): void;
    forEachRemaining<K extends Object | number | string | boolean>(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    nextIndex(): number;
    previous<K extends Object | number | string | boolean>(): K;
    previousIndex(): number;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}