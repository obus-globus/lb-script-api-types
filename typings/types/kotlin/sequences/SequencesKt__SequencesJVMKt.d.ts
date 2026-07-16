import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequenceScope } from '../../kotlin/sequences/SequenceScope.d.ts'
import type { SequencesKt__SequenceBuilderKt } from '../../kotlin/sequences/SequencesKt__SequenceBuilderKt.d.ts'
export class SequencesKt__SequencesJVMKt extends SequencesKt__SequenceBuilderKt {
    static iterator<T extends unknown>(block: (param0: SequenceScope<T>) => void): Iterator<T>;
    static sequence<T extends unknown>(block: (param0: SequenceScope<T>) => void): Sequence<T>;
}