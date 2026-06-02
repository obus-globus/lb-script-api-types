import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigListIterators$BigListIteratorListIterator<K extends Object | number | string | boolean> extends Object implements ObjectBigListIterator<K> {
    constructor(arg0: ObjectListIterator<K>)
    // private i: ObjectListIterator<K>;
    add(arg0: K): void;
    add(arg0: K): void;
    back(arg0: number): number;
    back(arg0: number): number;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    // private intDisplacement(arg0: number): number;
    next(): K;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    remove(): void;
    set(arg0: K): void;
    set(arg0: K): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}