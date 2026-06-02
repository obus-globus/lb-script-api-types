import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequencesKt__SequencesJVMKt } from '../../kotlin/sequences/SequencesKt__SequencesJVMKt.d.ts'
export class SequencesKt__SequencesKt extends SequencesKt__SequencesJVMKt {
    static asSequence(paramarg0: Iterator<Object>): Sequence<Object>;
    static constrainOnce(paramarg0: Sequence<Object>): Sequence<Object>;
    static emptySequence(): Sequence<Object>;
    static flatMapIndexed(paramarg0: Sequence<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Function1<Object, Object>): Sequence<Object>;
    static flatten(paramarg0: Sequence<Object>): Sequence<Object>;
    static flattenSequenceOfIterable(paramarg0: Sequence<Object>): Sequence<Object>;
    static generateSequence(paramarg0: Object | null, paramarg1: Function1<Object, Object>): Sequence<Object>;
    static generateSequence(paramarg0: Function0<Object>): Sequence<Object>;
    static generateSequence(paramarg0: Function0<Object>, paramarg1: Function1<Object, Object>): Sequence<Object>;
    static ifEmpty(paramarg0: Sequence<Object>, paramarg1: Function0<Object>): Sequence<Object>;
    static iterator(paramarg0: Function2<Object, Object, Object>): Iterator<Object>;
    static sequence(paramarg0: Function2<Object, Object, Object>): Sequence<Object>;
    static sequenceOf(paramarg0: Object | null): Sequence<Object>;
    static sequenceOf(paramarg0: Object | null): Sequence<Object>;
    static shuffled(paramarg0: Sequence<Object>): Sequence<Object>;
    static shuffled(paramarg0: Sequence<Object>, paramarg1: Random): Sequence<Object>;
    static unzip(paramarg0: Sequence<Object>): Pair<Object, Object>;
}