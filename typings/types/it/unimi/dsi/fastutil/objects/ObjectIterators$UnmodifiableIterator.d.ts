import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIterators$UnmodifiableIterator<K extends Object | number | string | boolean> extends Object implements ObjectIterator<K> {
    constructor(arg0: ObjectIterator<K>)
    // private i: ObjectIterator<K>;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    next(): K;
    skip(arg0: number): number;
}