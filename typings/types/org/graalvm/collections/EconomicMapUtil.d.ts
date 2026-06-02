import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapUtil extends Object {
    static equals(paramlhs: UnmodifiableEconomicMap<Object, Object>, paramrhs: UnmodifiableEconomicMap<Object, Object>): boolean;
    static hashCode(parammap: UnmodifiableEconomicMap<Object, Object>): number;
    static keySet(parammap: EconomicMap<Object, Object>): (Object | null)[];
    static lexicographicalComparator(paramkeyComparator: (param0: Object | null) => kotlin.Boolean, paramvalueComparator: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    private constructor()
}