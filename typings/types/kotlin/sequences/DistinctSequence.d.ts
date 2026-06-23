import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class DistinctSequence<T extends unknown, K extends unknown> extends Object implements Sequence<T> {
    constructor(source: Sequence<T>, keySelector: (param0: T) => K)
    // private keySelector: (param0: T) => K;
    // private source: Sequence<T>;
    iterator(): Iterator<T>;
}