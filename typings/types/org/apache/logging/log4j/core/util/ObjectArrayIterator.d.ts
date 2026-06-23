import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class ObjectArrayIterator<E extends unknown> extends Object implements Iterator<E> {
    constructor(array: E[])
    constructor(array: E[], start: number)
    constructor(array: E[], start: number, end: number)
    readonly array: E[];
    readonly endIndex: number;
    // private index: number;
    readonly startIndex: number;
    forEachRemaining(arg0: (param0: E) => void): void;
    getArray(): E[];
    getEndIndex(): number;
    getStartIndex(): number;
    hasNext(): boolean;
    next(): E;
    remove(): void;
    reset(): void;
}