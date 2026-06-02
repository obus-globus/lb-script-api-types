import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigListIterators$UnmodifiableBigListIterator<K extends Object | number | string | boolean> extends Object implements ObjectBigListIterator<K> {
    constructor(arg0: ObjectBigListIterator<K>)
    // private i: ObjectBigListIterator<K>;
    add(arg0: K): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    set(arg0: K): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}