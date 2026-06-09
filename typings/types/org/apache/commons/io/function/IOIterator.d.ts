import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
export interface IOIterator<E extends Object | number | string | boolean> extends Object {
    asIterator(): Iterator<E>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
    unwrap(): Iterator<E>;
}