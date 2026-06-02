import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class DistinctSequence<T extends Object | number | string | boolean, K extends Object | number | string | boolean> extends Object implements Sequence<T> {
    constructor(source: Sequence<T>, keySelector: Function1<T, K>)
    // private keySelector: (param0: T) => K;
    // private source: Sequence<T>;
    iterator(): Iterator<T>;
}