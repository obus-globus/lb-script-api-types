import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class FilteringSequence<T extends Object | number | string | boolean> extends Object implements Sequence<T> {
    constructor(sequence: Sequence<T>, sendWhen: boolean, predicate: Function1<T, boolean>)
    // private predicate: (param0: T) => boolean;
    // private sendWhen: boolean;
    // private sequence: Sequence<T>;
    iterator(): Iterator<T>;
}