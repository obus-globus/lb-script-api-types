import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIterators$UnmodifiableListIterator<K extends Object | number | string | boolean> extends Object implements ObjectListIterator<K> {
    constructor(arg0: ObjectListIterator<K>)
    // private i: ObjectListIterator<K>;
    add(arg0: K): void;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    remove(): void;
    set(arg0: K): void;
}