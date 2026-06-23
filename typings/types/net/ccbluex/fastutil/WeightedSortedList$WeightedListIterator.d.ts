import type { ObjectListIterator } from '../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WeightedSortedList$WeightedListIterator extends Object implements ObjectListIterator<E> {
    constructor(null_: WeightedSortedList$WeightedListIterator, startIndex: number)
    // private cursor: number;
    // private lastRet: number;
    add<E extends unknown>(arg0: E): void;
    add<E extends unknown>(e: E): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<E extends unknown>(): E;
    nextIndex(): number;
    previous<E extends unknown>(): E;
    previousIndex(): number;
    remove(): void;
    set<E extends unknown>(arg0: E): void;
    set<E extends unknown>(e: E): void;
}