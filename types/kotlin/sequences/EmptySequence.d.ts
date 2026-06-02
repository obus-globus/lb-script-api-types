import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { DropTakeSequence } from '../../kotlin/sequences/DropTakeSequence.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class EmptySequence extends Object implements DropTakeSequence<void>, Sequence<void> {
    static INSTANCE: EmptySequence;
    drop(n: number): EmptySequence;
    iterator(): Iterator<void>;
    take(n: number): EmptySequence;
}