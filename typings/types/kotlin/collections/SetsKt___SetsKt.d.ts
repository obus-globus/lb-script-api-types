import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SetsKt__SetsKt } from '../../kotlin/collections/SetsKt__SetsKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class SetsKt___SetsKt extends SetsKt__SetsKt {
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static createSetBuilder(): (Object | null)[];
    static createSetBuilder(paramarg0: number): (Object | null)[];
    static emptySet(): (Object | null)[];
    static hashSetOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static linkedSetOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static minus(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static minus(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): (Object | null)[];
    static minus(paramarg0: (Object | null)[], paramarg1: Sequence<Object>): (Object | null)[];
    static mutableSetOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static optimizeReadOnlySet(paramarg0: (Object | null)[]): (Object | null)[];
    static plus(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static plus(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): (Object | null)[];
    static plus(paramarg0: (Object | null)[], paramarg1: Sequence<Object>): (Object | null)[];
    static setOf(paramarg0: Object | null): (Object | null)[];
    static setOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static setOfNotNull(paramarg0: Object | null): (Object | null)[];
    static setOfNotNull(...paramarg0: (Object | null)[]): (Object | null)[];
    static sortedSetOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static sortedSetOf(paramarg0: (param0: Object, param1: Object) => number, ...paramarg1: (Object | null)[]): (Object | null)[];
}