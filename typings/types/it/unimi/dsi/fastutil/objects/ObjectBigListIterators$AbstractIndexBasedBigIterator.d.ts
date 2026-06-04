import type { AbstractObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectBigListIterators$AbstractIndexBasedBigIterator<K extends Object | number | string | boolean> extends AbstractObjectIterator<K> {
    constructor(arg0: number, arg1: number)
    // private lastReturned: number;
    // private minPos: number;
    // private pos: number;
    forEachRemaining(arg0: (param0: K) => void): void;
    get(arg0: number): K;
    getMaxPos(): number;
    hasNext(): boolean;
    next(): K;
    remove(): void;
    remove(arg0: number): void;
    skip(arg0: number): number;
}