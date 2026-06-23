import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface PeekingIterator<E extends unknown> extends Object, Iterator<E> {
    forEachRemaining(arg0: (param0: E) => void): void;
    next(): E;
    peek(): E;
    remove(): void;
}