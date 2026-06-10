import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequencesKt__SequenceBuilderKt } from '../../kotlin/sequences/SequencesKt__SequenceBuilderKt.d.ts'
export class SequencesKt__SequencesJVMKt extends SequencesKt__SequenceBuilderKt {
    static iterator(paramarg0: (param0: Object, param1: Object) => Object): Iterator<Object>;
    static sequence(paramarg0: (param0: Object, param1: Object) => Object): Sequence<Object>;
}