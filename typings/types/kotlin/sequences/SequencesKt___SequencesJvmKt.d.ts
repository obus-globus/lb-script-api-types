import type { Class } from '../../java/lang/Class.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequencesKt__SequencesKt } from '../../kotlin/sequences/SequencesKt__SequencesKt.d.ts'
export class SequencesKt___SequencesJvmKt extends SequencesKt__SequencesKt {
    static asSequence(paramarg0: Iterator<Object>): Sequence<Object>;
    static constrainOnce(paramarg0: Sequence<Object>): Sequence<Object>;
    static emptySequence(): Sequence<Object>;
    static filterIsInstance(paramarg0: Sequence<Object>, paramarg1: Class<Object>): Sequence<Object>;
    static filterIsInstanceTo(paramarg0: Sequence<Object>, paramarg1: Object | null, paramarg2: Class<Object>): Object | null;
    static flatMapIndexed(paramarg0: Sequence<Object>, paramarg1: (param0: Object, param1: Object) => Object | null, paramarg2: (param0: Object) => Iterator<Object>): Sequence<Object>;
    static flatten(paramarg0: Sequence<Sequence<Object>>): Sequence<Object>;
    static flattenSequenceOfIterable(paramarg0: Sequence<(Object | null)[]>): Sequence<Object>;
    static generateSequence(paramarg0: Object | null, paramarg1: (param0: Object) => Object | null): Sequence<Object>;
    static generateSequence(paramarg0: () => Object | null): Sequence<Object>;
    static generateSequence(paramarg0: () => Object | null, paramarg1: (param0: Object) => Object | null): Sequence<Object>;
    static ifEmpty(paramarg0: Sequence<Object>, paramarg1: () => Sequence<Object>): Sequence<Object>;
    static iterator(paramarg0: (param0: Object, param1: Object) => Object): Iterator<Object>;
    static max(paramarg0: Sequence<Object>): Comparable<Object>;
    static max(paramarg0: Sequence<Object>): number;
    static maxBy(paramarg0: Sequence<Object>, paramarg1: (param0: Object) => Object | null): Object | null;
    static maxWith(paramarg0: Sequence<Object>, paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static min(paramarg0: Sequence<Object>): Comparable<Object>;
    static min(paramarg0: Sequence<Object>): number;
    static minBy(paramarg0: Sequence<Object>, paramarg1: (param0: Object) => Object | null): Object | null;
    static minWith(paramarg0: Sequence<Object>, paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static sequence(paramarg0: (param0: Object, param1: Object) => Object): Sequence<Object>;
    static sequenceOf(paramarg0: Object | null): Sequence<Object>;
    static sequenceOf(...paramarg0: (Object | null)[]): Sequence<Object>;
    static shuffled(paramarg0: Sequence<Object>): Sequence<Object>;
    static shuffled(paramarg0: Sequence<Object>, paramarg1: Random): Sequence<Object>;
    static toSortedSet(paramarg0: Sequence<Object>): (Object | null)[];
    static toSortedSet(paramarg0: Sequence<Object>, paramarg1: (param0: Object, param1: Object) => number): (Object | null)[];
    static unzip(paramarg0: Sequence<Pair<Object, Object>>): Pair<(Object | null)[], (Object | null)[]>;
}