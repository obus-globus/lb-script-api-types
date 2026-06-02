import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class PhysicalDisk extends Object {
    static queryDiskCounters(): Pair<Object, Object>;
    private constructor()
}