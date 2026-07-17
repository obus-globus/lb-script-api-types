import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
export class IOIteratorAdapter<E extends unknown> extends Object implements IOIterator<E> {
    private constructor(arg0: Iterator<E>)
    // private delegate: Iterator<E>;
    asIterator(): Iterator<E>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
    unwrap(): Iterator<E>;
}