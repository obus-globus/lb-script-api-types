import type { AtomicReference } from '../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class ConstrainedOnceSequence<T extends unknown> extends Object implements Sequence<T> {
    constructor(sequence: Sequence<T>)
    // private sequenceRef: AtomicReference<Sequence<T>>;
    iterator(): Iterator<T>;
}