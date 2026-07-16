import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { MapsKt__MapWithDefaultKt } from '../../kotlin/collections/MapsKt__MapWithDefaultKt.d.ts'
export class MapsKt__MapsJVMKt extends MapsKt__MapWithDefaultKt {
    static build(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static createMapBuilder(): Map<Object | null, Object | null>;
    static createMapBuilder(paramarg0: number): Map<Object | null, Object | null>;
    static getOrDefaultImpl(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static getOrImplicitDefaultNullable(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static getOrPut(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: () => Object | null): Object | null;
    static getOrPutIfNullImpl(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static mapCapacity(paramarg0: number): number;
    static mapOf(paramarg0: Pair<Object, Object>): Map<Object | null, Object | null>;
    static sortedMapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static sortedMapOf(paramarg0: (param0: Object, param1: Object) => number, ...paramarg1: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static toSingletonMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object, param1: Object) => number): Map<Object | null, Object | null>;
    static withDefault(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
    static withDefaultMutable(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
}