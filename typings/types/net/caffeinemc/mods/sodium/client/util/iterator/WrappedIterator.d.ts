import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class WrappedIterator<T extends unknown> extends Object implements Iterator<T> {
    static create(paramarg0: (Object | null)[]): WrappedIterator<Object>;
    private constructor(arg0: Iterator<T>)
    // private delegate: Iterator<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}