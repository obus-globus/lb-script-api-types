import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIterators$UnmodifiableBidirectionalIterator<K extends Object | number | string | boolean> extends Object implements ObjectBidirectionalIterator<K> {
    constructor(arg0: ObjectBidirectionalIterator<K>)
    // private i: ObjectBidirectionalIterator<K>;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    skip(arg0: number): number;
}