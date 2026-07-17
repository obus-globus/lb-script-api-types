import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class PerfCounterWildcardQuery extends Object {
    static queryInstancesAndValues<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string, paramarg2: string): Pair<string[], JavaMap<T, number[]>>;
    static queryInstancesAndValues<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string, paramarg2: string, paramarg3: string): Pair<string[], JavaMap<T, number[]>>;
    static queryInstancesAndValuesFromPDH<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): Pair<string[], JavaMap<T, number[]>>;
    static queryInstancesAndValuesFromPDH<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string, paramarg2: string): Pair<string[], JavaMap<T, number[]>>;
    static queryInstancesAndValuesFromWMI<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): Pair<string[], JavaMap<T, number[]>>;
    private constructor()
}