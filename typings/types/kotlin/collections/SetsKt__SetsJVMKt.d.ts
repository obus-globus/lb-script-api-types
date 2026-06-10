import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SetsKt__SetsJVMKt extends Object {
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static createSetBuilder(): (Object | null)[];
    static createSetBuilder(paramarg0: number): (Object | null)[];
    static setOf(paramarg0: Object | null): (Object | null)[];
    static sortedSetOf(paramarg0: Object | null): (Object | null)[];
    static sortedSetOf(paramarg0: (param0: Object) => boolean, paramarg1: Object | null): (Object | null)[];
}