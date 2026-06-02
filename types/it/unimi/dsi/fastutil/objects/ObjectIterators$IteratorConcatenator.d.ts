import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIterators$IteratorConcatenator<K extends Object | number | string | boolean> extends Object implements ObjectIterator<K> {
    constructor(arg0: ObjectIterator<K>[], arg1: number, arg2: number)
    // private a: ObjectIterator<K>[];
    // private lastOffset: number;
    // private length: number;
    // private offset: number;
    // private advance(): void;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    next(): K;
    remove(): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}