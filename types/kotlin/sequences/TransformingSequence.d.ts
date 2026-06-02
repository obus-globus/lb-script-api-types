import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class TransformingSequence<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Sequence<R> {
    constructor(sequence: Sequence<T>, transformer: Function1<T, R>)
    // private sequence: Sequence<T>;
    // private transformer: (param0: T) => R;
    flatten(iterator: Function1<R, Iterator<E>>): Sequence<E>;
    iterator(): Iterator<R>;
}