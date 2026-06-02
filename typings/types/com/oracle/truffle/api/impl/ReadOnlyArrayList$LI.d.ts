import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class ReadOnlyArrayList$LI extends Object implements Iterator<T>, ListIterator<T> {
    constructor(null_: ReadOnlyArrayList$LI, index: number)
    // private index: number;
    add(e: Object): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<T extends Object | number | string | boolean>(): T;
    nextIndex(): number;
    previous<T extends Object | number | string | boolean>(): T;
    previousIndex(): number;
    remove(): void;
    set(e: Object): void;
}