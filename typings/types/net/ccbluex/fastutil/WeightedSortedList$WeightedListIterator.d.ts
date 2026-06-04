import type { ObjectListIterator } from '../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WeightedSortedList$WeightedListIterator extends Object implements ObjectListIterator<E> {
    constructor(null_: WeightedSortedList$WeightedListIterator, startIndex: number)
    // private cursor: number;
    // private lastRet: number;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add<E extends Object | number | string | boolean>(e: E): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<E extends Object | number | string | boolean>(): E;
    nextIndex(): number;
    previous<E extends Object | number | string | boolean>(): E;
    previousIndex(): number;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set<E extends Object | number | string | boolean>(e: E): void;
}