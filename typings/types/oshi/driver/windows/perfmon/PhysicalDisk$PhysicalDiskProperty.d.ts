import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PerfCounterWildcardQuery$PdhCounterWildcardProperty } from '../../../../oshi/util/platform/windows/PerfCounterWildcardQuery$PdhCounterWildcardProperty.d.ts'
export class PhysicalDisk$PhysicalDiskProperty extends Enum<PhysicalDisk$PhysicalDiskProperty> implements PerfCounterWildcardQuery$PdhCounterWildcardProperty {
    static CURRENTDISKQUEUELENGTH: PhysicalDisk$PhysicalDiskProperty;
    static DISKREADBYTESPERSEC: PhysicalDisk$PhysicalDiskProperty;
    static DISKREADSPERSEC: PhysicalDisk$PhysicalDiskProperty;
    static DISKWRITEBYTESPERSEC: PhysicalDisk$PhysicalDiskProperty;
    static DISKWRITESPERSEC: PhysicalDisk$PhysicalDiskProperty;
    static NAME: PhysicalDisk$PhysicalDiskProperty;
    static PERCENTDISKTIME: PhysicalDisk$PhysicalDiskProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PhysicalDisk$PhysicalDiskProperty;
    static values(): PhysicalDisk$PhysicalDiskProperty[];
    private constructor(arg2: string)
    readonly counter: string;
    getCounter(): string;
    name(): "NAME" | "DISKREADSPERSEC" | "DISKREADBYTESPERSEC" | "DISKWRITESPERSEC" | "DISKWRITEBYTESPERSEC" | "CURRENTDISKQUEUELENGTH" | "PERCENTDISKTIME";
}