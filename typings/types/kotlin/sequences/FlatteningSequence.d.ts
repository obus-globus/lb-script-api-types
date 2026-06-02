import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class FlatteningSequence<T extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object implements Sequence<E> {
    constructor(sequence: Sequence<T>, transformer: Function1<T, R>, iterator: Function1<R, Iterator<E>>)
    // private iterator: (param0: R) => Iterator<E>;
    // private sequence: Sequence<T>;
    // private transformer: (param0: T) => R;
    iterator(): Iterator<E>;
}