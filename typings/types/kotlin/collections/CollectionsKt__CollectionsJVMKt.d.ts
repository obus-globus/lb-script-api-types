import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CollectionsKt__CollectionsJVMKt extends Object {
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static copyToArrayOfAny(paramarg0: (Object | null)[], paramarg1: boolean): Object[];
    static createListBuilder(): (Object | null)[];
    static createListBuilder(paramarg0: number): (Object | null)[];
    static listOf(paramarg0: Object | null): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static terminateCollectionToArray(paramarg0: number, paramarg1: (Object | null)[]): (Object | null)[];
}