import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class TransformingSequence<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Sequence<R> {
    constructor(sequence: Sequence<T>, transformer: (param0: T) => R)
    // private sequence: Sequence<T>;
    // private transformer: (param0: T) => R;
    flatten<E extends Object | number | string | boolean>(iterator: (param0: R) => Iterator<E>): Sequence<E>;
    iterator(): Iterator<R>;
}