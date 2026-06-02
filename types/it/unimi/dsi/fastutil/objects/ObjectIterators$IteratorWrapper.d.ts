import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ObjectIterators$IteratorWrapper<K extends Object | number | string | boolean> extends Object implements ObjectIterator<K> {
    constructor(arg0: Iterator<K>)
    // private i: Iterator<K>;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    next(): K;
    remove(): void;
    skip(arg0: number): number;
}