import type { Multisets$AbstractEntry } from '../../../../com/google/common/collect/Multisets$AbstractEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeMultiset$Reference<T extends unknown> extends Object {
    constructor(arg0: Multisets$AbstractEntry<E>)
    // private value: T;
    checkAndSet(expected: T, newValue: T): void;
    clear(): void;
    get(): T;
}