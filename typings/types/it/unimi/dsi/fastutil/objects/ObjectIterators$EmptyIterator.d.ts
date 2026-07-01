import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ObjectIterators$EmptyIterator<K extends unknown> extends Object implements ObjectListIterator<K>, Serializable, Cloneable {
    constructor()
    add(arg0: K): void;
    back(arg0: number): number;
    clone(): Object;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    nextIndex(): number;
    previous(): K;
    previousIndex(): number;
    // private readResolve(): Object;
    remove(): void;
    set(arg0: K): void;
    skip(arg0: number): number;
}