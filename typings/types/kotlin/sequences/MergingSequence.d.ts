import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class MergingSequence<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Sequence<V> {
    constructor(sequence1: Sequence<T1>, sequence2: Sequence<T2>, transform: (param0: T1, param1: T2) => V)
    // private sequence1: Sequence<T1>;
    // private sequence2: Sequence<T2>;
    // private transform: (param0: T1, param1: T2) => V;
    iterator(): Iterator<V>;
}