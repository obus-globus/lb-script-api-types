import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapUtil extends Object {
    static equals<K extends unknown, V extends unknown>(paramlhs: UnmodifiableEconomicMap<K, V>, paramrhs: UnmodifiableEconomicMap<K, V>): boolean;
    static hashCode<K extends unknown, V extends unknown>(parammap: UnmodifiableEconomicMap<K, V>): number;
    static keySet<K extends unknown, V extends unknown>(parammap: EconomicMap<K, V>): K[];
    static lexicographicalComparator<K extends unknown, V extends unknown>(paramkeyComparator: (param0: K, param1: K) => number, paramvalueComparator: (param0: V, param1: V) => number): (param0: UnmodifiableEconomicMap<K, V>, param1: UnmodifiableEconomicMap<K, V>) => number;
    private constructor()
}