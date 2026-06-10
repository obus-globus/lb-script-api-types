import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PhysicalDisk$PhysicalDiskProperty } from '../../../../oshi/driver/windows/perfmon/PhysicalDisk$PhysicalDiskProperty.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class PhysicalDisk extends Object {
    static queryDiskCounters(): Pair<string[], { [key in PhysicalDisk$PhysicalDiskProperty]: number[] }>;
    private constructor()
}