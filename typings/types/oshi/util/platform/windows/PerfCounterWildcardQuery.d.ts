import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class PerfCounterWildcardQuery extends Object {
    static queryInstancesAndValues(paramarg0: Class<Object>, paramarg1: string, paramarg2: string): Pair<string[], Map<Object | null, number[]>>;
    static queryInstancesAndValues(paramarg0: Class<Object>, paramarg1: string, paramarg2: string, paramarg3: string): Pair<string[], Map<Object | null, number[]>>;
    static queryInstancesAndValuesFromPDH(paramarg0: Class<Object>, paramarg1: string): Pair<string[], Map<Object | null, number[]>>;
    static queryInstancesAndValuesFromPDH(paramarg0: Class<Object>, paramarg1: string, paramarg2: string): Pair<string[], Map<Object | null, number[]>>;
    static queryInstancesAndValuesFromWMI(paramarg0: Class<Object>, paramarg1: string): Pair<string[], Map<Object | null, number[]>>;
    private constructor()
}