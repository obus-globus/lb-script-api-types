import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class TakeWhileSequence<T extends unknown> extends Object implements Sequence<T> {
    constructor(sequence: Sequence<T>, predicate: (param0: T) => boolean)
    // private predicate: (param0: T) => boolean;
    // private sequence: Sequence<T>;
    iterator(): Iterator<T>;
}