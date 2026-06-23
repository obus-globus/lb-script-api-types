import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class ObjectArrayBuffer$ObjectBufferIterator<T extends unknown> extends Object implements Iterator<T> {
    private constructor(buf: Object[], size: number)
    // private buf: Object[];
    // private i: number;
    // private size: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}