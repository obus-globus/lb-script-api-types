import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class StreamIterator<E extends unknown> extends Object implements AutoCloseable, Iterator<E> {
    static iterator(paramarg0: Stream<Object>): StreamIterator<Object>;
    private constructor(arg0: Stream<E>)
    // private closed: boolean;
    // private iterator: Iterator<E>;
    // private stream: Stream<E>;
    close(): void;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
}