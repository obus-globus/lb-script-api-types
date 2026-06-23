import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIterators$SingletonIterator<K extends unknown> extends Object implements ObjectListIterator<K> {
    constructor(arg0: K)
    // private curr: number;
    // private element: K;
    add(arg0: K): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    remove(): void;
    set(arg0: K): void;
    skip(arg0: number): number;
}