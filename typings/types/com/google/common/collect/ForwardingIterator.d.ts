import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class ForwardingIterator<T extends Object | number | string | boolean> extends ForwardingObject implements Iterator<T> {
    constructor()
    delegate(): Iterator<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
}